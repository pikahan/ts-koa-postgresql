import {router} from './router'
import * as Koa from 'koa'
import * as cors from 'koa2-cors'
import * as koaBody from 'koa-body'

const app = new Koa()
app.use(cors())
app.use(koaBody())
app
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