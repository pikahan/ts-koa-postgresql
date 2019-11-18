/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {LoginStatusCode, RegisterStatusCode, STATUS} from '../util/constant'
import {UserService} from '../service/UserService'
import {UserServiceImpl} from '../service/impl/UserServiceImpl'
import {toMd5} from '../util/help'
const Store = require("../config/Store")

const redis = new Store()

const router = new Router()
const userService: UserService = new UserServiceImpl()

// login
router.get('/login', async ctx => {
  const query = ctx.query
  // 正常登录
  if (typeof query.username !== 'undefined') {
    const {username, pwd} = ctx.query
    const res = await userService.login(username, pwd)
    if (res.code === LoginStatusCode.OK) {

      redis.set({
        id: res.response.id,
        username: res.response.username
      })
    }
    ctx.body = res

  } else {
    return (ctx.body = {
      code: STATUS.NOT_LOGIN,
      message: '未登录, 请进入登录界面进行登录'
    })
  }
})

router.get('/logout', async ctx => {
  ctx.session = null
  // ctx.response.redirect('/login');
})

// register
router.get('/register', async ctx => {
  const { username, pwd } = ctx.query
  const res = await userService.register(username, toMd5(pwd))
  if (res.code === RegisterStatusCode.OK) {
    ctx.session.user = {
      id: res.response.id,
      username: res.response.username
    }
  }
  ctx.body = res
})

router.get('/info/:username', async ctx => {
  const { username } = ctx.params
  const res = await userService.findInfoByUsername(username)
  // if (res.code === RegisterStatusCode.OK) {
  //   ctx.session.user = {
  //     id: res.response.id,
      // username: res.response.username
  //   }
  // }
  ctx.body = res
})

// update
router.get('/update', async ctx => {
  const { id, username, pwd, level } = ctx.query
  ctx.body = await userService.update(id, username, pwd, level)
})

// 获取所有用户
router.get('/', async (ctx) => {
  ctx.body = await userService.findAll()
})

// 获取单个用户
router.get('/:username', async (ctx) => {
  const {username} = ctx.params
  const user = await userService.findByName(username)
  ctx.body = user
    ? {
      code: STATUS.OK,
      message: 'ok',
      request: user,
    } : {
      code: 1,
      message: 'not found',
    }
})

router.get('/:username/:pwd', async (ctx) => {
  const {username, pwd} = ctx.params
  try {
    const user = await userService.create(username, pwd, 'admin')
    ctx.body = user
      ? {
        code: STATUS.OK,
        message: 'ok',
        request: user,
      } : {
        code: STATUS.NOT_FOUND,
        message: 'not found',
      }
  } catch (e) {
    ctx.body = {
      code: STATUS.ERROR,
      message: 'error',
    }
  }

})

export default router