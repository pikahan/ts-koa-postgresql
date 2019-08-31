/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {SchoolService} from '../service/SchoolService'
import {SchoolServiceImpl} from '../service/impl/SchoolServiceImpl'

const router = new Router()
const schoolService: SchoolService = new SchoolServiceImpl()

// findBySchoolName
router.post('/name', async ctx => {
  const {schoolName} = ctx.request.body
  if (schoolName) {
    ctx.body = await schoolService.findBySchoolName(schoolName)
  }
})

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, schoolId, schoolName, province, city} = ctx.query
  const exactQueryAttr = toPureObj({province, city})
  const fuzzyQueryAttr = toPureObj({schoolId, schoolName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await schoolService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await schoolService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  // console.log(entity)
  const ret = await schoolService.update(id, entity)
  ctx.body = ret
})

router.get('/delete/:id', async ctx => {
  const {id} = ctx.params
  const ret = await schoolService.delete(id)
  ctx.body = ret
})

export default router