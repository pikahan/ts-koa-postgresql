/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import userRouter from './userRouter'
import registrationRouter from './registrationRouter'

const router = new Router({
  prefix: '/api',
})
router.use('/user', userRouter.routes(), userRouter.allowedMethods())

router.use('/registration', registrationRouter.routes(), registrationRouter.allowedMethods())

export {router}