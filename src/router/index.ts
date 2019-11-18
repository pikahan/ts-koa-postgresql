/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import userRouter from './userRouter'
import registrationRouter from './registrationRouter'
import schoolRouter from './schoolRouter'
import majorRouter from './majorRouter'
import majorTypeRouter from './majorTypeRouter'
import enrollmentRouter from './enrollmentRouter'
import subjectRouter from './subjectRouter'
import studentRouter from './studentRouter'
import specialityRouter from './specialityRouter'
import xuekaoRouter from './xuekaoRouter'
import xuankaoRouter from './xuankaoRouter'
import enrollmentRequireRouter from './enrollmentRequireRouter'
import recommendationRouter from './recommendationRouter'

const router = new Router({
  prefix: '/api',
})
// let sum = 0
// router.get('/auth', async (ctx, next) => {
//   if (ctx.session.user) {
//     ctx.body =  JSON.stringify({
//       status: STATUS.OK
//     })
//   }
//   else {
//     ctx.body = JSON.stringify({
//       status: STATUS.NOT_LOGIN
//     })
//   }
//   await next()
// })
// router.get('/user/login', async ctx => {
//   const query = ctx.query
//   if (typeof query.username === 'undefined') {
//     ctx.body = JSON.stringify({
//       code: STATUS.ERROR
//     })
//   } else {
//     const {username, pwd} = query
//       const res = await userService.login(username, pwd)
//       ctx.session.user = res.response
//       ctx.body = JSON.stringify(res)
//   }
// })

// router.get('/login', async ctx => {
//   console.log(ctx.session.user)
  // const data = await redis.get('username')
  // console.log(data, 'redis')
  // if (data) {
  //   return (ctx.body = {
  //     code: 0,
  //     response: ctx.session.user
  //   })
  // }
  // const query = ctx.query
  // 正常登录
  // if (typeof query.username !== 'undefined') {
  //   const {username, pwd} = ctx.query
  //   const res = await userService.login(username, pwd)
  //   if (res.code === LoginStatusCode.OK) {
  //     ctx.session.user = {
  //       id: res.response.id,
  //       username: res.response.username
  //     }
  //     return ctx.body = res
  //   }
    // console.log(ctx.session.user)
  // }
    // ctx.body = 123
  // } else {
  //   ctx.body = 123
  // }
  // else {
  //   return (ctx.body = {
  //     code: STATUS.NOT_LOGIN,
  //     message: '未登录, 请进入登录界面进行登录'
  //   })
  // }
// })

router.use('/school', schoolRouter.routes(), schoolRouter.allowedMethods())

router.use('/user', userRouter.routes(), userRouter.allowedMethods())

router.use('/registration', registrationRouter.routes(), registrationRouter.allowedMethods())

router.use('/major', majorRouter.routes(), majorRouter.allowedMethods())

router.use('/majorType', majorTypeRouter.routes(), majorTypeRouter.allowedMethods())

router.use('/enrollment', enrollmentRouter.routes(), enrollmentRouter.allowedMethods())

router.use('/subject', subjectRouter.routes(), subjectRouter.allowedMethods())

router.use('/student', studentRouter.routes(), studentRouter.allowedMethods())

router.use('/speciality', specialityRouter.routes(), specialityRouter.allowedMethods())

router.use('/xuekao', xuekaoRouter.routes(), xuekaoRouter.allowedMethods())

router.use('/xuankao', xuankaoRouter.routes(), xuankaoRouter.allowedMethods())

router.use('/enrollmentRequire', enrollmentRequireRouter.routes(), enrollmentRequireRouter.allowedMethods())

router.use('/recommendation', recommendationRouter.routes(), recommendationRouter.allowedMethods())


export {router}