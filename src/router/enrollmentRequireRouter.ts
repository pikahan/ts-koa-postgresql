/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {EnrollmentRequireService} from '../service/EnrollmentRequireService'
import {EnrollmentServiceRequireImpl} from '../service/impl/EnrollmentRequireServiceImpl'

const router = new Router()
const enrollmentService: EnrollmentRequireService = new EnrollmentServiceRequireImpl()

router.get('/', async ctx => {
  const {currPage, limit, schoolName, majorName, year, subjectName} = ctx.query
  const exactQueryAttr = toPureObj({year, subjectName})
  const fuzzyQueryAttr = toPureObj({majorName, schoolName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await enrollmentService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await enrollmentService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  // console.log(entity)

  if (entity) {
    const ret = await enrollmentService.update(id, entity)
    ctx.body = ret
  }
})

router.get('/delete/:id', async ctx => {
  const { id } = ctx.params
  const ret = await enrollmentService.delete(id)
  ctx.body = ret
})

export default router