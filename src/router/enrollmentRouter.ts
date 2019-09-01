/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {MajorService} from '../service/MajorService'
import {MajorServiceImpl} from '../service/impl/MajorServiceImpl'
import {EnrollmentService} from '../service/EnrollmentService'
import {EnrollmentServiceImpl} from '../service/impl/EnrollmentServiceImpl'

const router = new Router()
const enrollmentService: EnrollmentService = new EnrollmentServiceImpl()

// findBySchoolName
// router.post('/name', async ctx => {
//   const { schoolName } = ctx.request.body
//   if (schoolName) {
//     ctx.body = await majorService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, schoolName, majorName, year, subjectName} = ctx.query
  const exactQueryAttr = toPureObj({year})
  const fuzzyQueryAttr = toPureObj({majorName, year, schoolName})
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