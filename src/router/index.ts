/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import userRouter from './userRouter'
import registrationRouter from './registrationRouter'
import {UserService} from '../service/UserService'
import {UserServiceImpl} from '../service/impl/UserServiceImpl'
import user from '../control/user'

const router = new Router({
  prefix: '/api',
})

router.get('/login', async ctx => {
  const { username, pwd } = ctx.query
  ctx.body = ctx.query
})

router.use('/user', userRouter.routes(), userRouter.allowedMethods())

router.use('/registration', registrationRouter.routes(), registrationRouter.allowedMethods())

export {router}