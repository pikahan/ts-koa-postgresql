/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import userRouter from './userRouter'
import registrationRouter from './registrationRouter'
import schoolRouter from './schoolRouter'
import majorRouter from './majorRouter'
import enrollmentRouter from './enrollmentRouter'
import subjectRouter from './subjectRouter'
import studentRouter from './studentRouter'
import specialityRouter from './specialityRouter'
import xuekaoRouter from './xuekaoRouter'
import xuankaoRouter from './xuankaoRouter'

const router = new Router({
  prefix: '/api',
})

router.get('/login', async ctx => {
  const { username, pwd } = ctx.query
  ctx.body = ctx.query
})

router.use('/school', schoolRouter.routes(), schoolRouter.allowedMethods())

router.use('/user', userRouter.routes(), userRouter.allowedMethods())

router.use('/registration', registrationRouter.routes(), registrationRouter.allowedMethods())

router.use('/major', majorRouter.routes(), majorRouter.allowedMethods())

router.use('/enrollment', enrollmentRouter.routes(), enrollmentRouter.allowedMethods())

router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())

router.use('/student', studentRouter.routes(), studentRouter.allowedMethods())

router.use('/speciality', specialityRouter.routes(), specialityRouter.allowedMethods())

router.use('/xuekao', xuekaoRouter.routes(), xuekaoRouter.allowedMethods())

router.use('/xuankao', xuankaoRouter.routes(), xuankaoRouter.allowedMethods())


export {router}