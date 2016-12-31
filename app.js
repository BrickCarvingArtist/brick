import "babel-polyfill";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import session from "koa-generic-session";
import redisStore from "koa-redis";
import logger from "koa-logger";
import convert from "koa-convert";
import {COOKIE_KEYS, SERVER_CONFIG, REDIS_CONFIG} from "./config";
import chat from "./controller/socket";
import routes from "./controller";
const app = new Koa,
	store = redisStore(REDIS_CONFIG);
app.keys = COOKIE_KEYS;
console.log(Object.getOwnPropertyNames(Object));
chat(app)
	.use(convert(logger()))
	.use(serve("./static"))
	.use(convert(session({
		store
	})))
	.use(bodyParser())
	.use(routes)
	.listen(SERVER_CONFIG.port, console.log("Server started."));