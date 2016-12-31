import Router from "koa-router";
import {values} from "lodash";
import API from "./api";
import VIEW from "./view";
export default export default [...API, ...VIEW].reduce((router, {method, from, ...action}) => router[method](from, ...values(action)), new Router).routes();