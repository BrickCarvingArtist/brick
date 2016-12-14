import "babel-polyfill";
import Koa from "koa";
import Router from "koa-router";
import body from "koa-better-body";
import cors from "koa-cors";
import serve from "koa-static";
import session from "koa-generic-session";
import redisStore from "koa-redis";
import logger from "koa-logger";
import convert from "koa-convert";
import fetch from "node-fetch";
import {serverConfig, redisConfig} from "./config";
import chat from "./controller/socket";
import routerAuthApi from "./controller/authApi";
import routerBasicApi from "./controller/api";
import routerView, {route as routeView} from "./controller/view";
const app = new Koa,
	router = new Router,
	store = redisStore(redisConfig);
// socket
chat(app, store);
// routes
[...routerAuthApi, ...routerBasicApi, ...routerView].forEach(({method, from, action}) => {
	router[method](from, action);
});
const basicRoute = [...routerBasicApi.map(item => item.from), ...routeView];
// app
app.keys = ["test"];
app
	.use(convert(logger()))
	.use(convert(serve("./static")))
	.use(convert(session({
		store
	})))
	.use(convert(body()))
	.use(convert(cors({
		credentials : true
	})))
	.use(({request, response, session, socket}, next) => {
		if(session.user || ~basicRoute.indexOf(request.path)){
			return next();
		}
		if(/^\/api\/.+/.test(request.path)){
			return response.body = {
				code : 1,
				message : "not authenticated"
			};
		}
		response.redirect("/signIn");
	})
	.use(router.routes())
	.listen(serverConfig.port, () => {
		console.log("Server started");
	});