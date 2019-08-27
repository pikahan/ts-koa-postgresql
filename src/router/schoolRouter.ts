/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {STATUS} from '../util/constant'
import {UserService} from '../service/UserService'
import {UserServiceImpl} from '../service/impl/UserServiceImpl'
import {toMd5} from '../util/help'
import {SchoolService} from '../service/SchoolService'
import {SchoolServiceImpl} from '../service/impl/SchoolServiceImpl'

const router = new Router()
const schoolService: SchoolService = new SchoolServiceImpl()

// findBySchoolName
router.post('/name', async ctx => {
  const { schoolName } = ctx.request.body
  if (schoolName) {
    ctx.body = await schoolService.findBySchoolName(schoolName)
  }
})

// findAll
router.get('/', async ctx => {
  ctx.body = await schoolService.findAll()
})

//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  const ret = await schoolService.create(entity)
  ctx.body = ret
})

export default router