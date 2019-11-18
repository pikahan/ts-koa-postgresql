import {router} from './router'
import * as Koa from 'koa'
import * as cors from 'koa2-cors'
import bodyParser from "koa-bodyparser-ts";
import * as session from 'koa-session'
const Store = require("./config/Store");


const app = new Koa()
app.keys = ['DJ'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/  //此时让session存储在redis中
  store: new Store()
}


app.use(bodyParser())
.use(cors())
.use(session(CONFIG, app))
.use(router.routes())
.use(router.allowedMethods())
/**
 * @name: 设置静态资源目录
 * @param : undefined
 * @return : undefined
 */
// app.use(koaStatic('./www'));

/**
 * @name: 使用路由
 * @param : undefined
 * @return : undefined
 */

/**
 * @name: 服务端口
 * @param : undefined
 * @return : undefined
 */
const httpPort = 8080

app.listen(httpPort)

console.log(`Http Server running on port ${httpPort}`)