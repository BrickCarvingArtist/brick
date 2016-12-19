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
import routerApi from "./controller/api";
import routerView from "./controller/view";
const app = new Koa,
	router = new Router,
	store = redisStore(redisConfig);
// socket
chat(app, store);
// routes
[...routerApi, ...routerView].forEach(({method, from, action}) => {
	router[method](from, action);
});
// app
app.keys = ["test"];
app
	.use(convert(logger()))
	.use(convert(serve("./static")))
	.use(convert(session({
		store
	})))
	.use(convert(body()))
	.use(router.routes())
	.listen(serverConfig.port, () => {
		console.log("Server started");
	});