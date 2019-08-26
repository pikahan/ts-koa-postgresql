/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router';
import { UserInfo } from '../dao/UserDao';
import { STATUS } from '../util/constant'
import { UserService } from '../service/UserService';
import { UserServiceImpl } from '../service/impl/UserServiceImpl';

const router = new Router();
const userService: UserService = new UserServiceImpl();

// 获取所有用户
router.get('/', async (ctx) => {
  ctx.body = await userService.findAll();
})

// 获取单个用户
router.get('/:username', async (ctx) => {
  const { username } = ctx.params
  const user = await userService.findByName(username)
  ctx.body = user
    ? {
      code: STATUS.OK,
      message: 'ok',
      request: user
    } : {
      code: 1,
      message: 'not found',
    }
})

router.get('/:username/:pwd', async (ctx) => {
  const { username, pwd } = ctx.params
  try {
    const user = await userService.create(username, pwd, 1)
    ctx.body = user
      ? {
        code: STATUS.OK,
        message: 'ok',
        request: user
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