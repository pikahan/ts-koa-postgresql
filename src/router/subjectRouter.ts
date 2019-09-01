/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {SubjectService} from '../service/SubjectService'
import {SubjectServiceImpl} from '../service/impl/SubjectServiceImpl'

const router = new Router()
const subjectService: SubjectService = new SubjectServiceImpl()

// // findBySchoolName
// router.post('/name', async ctx => {
//   const {schoolName} = ctx.request.body
//   if (schoolName) {
//     ctx.body = await subjectService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, subjectName} = ctx.query
  const exactQueryAttr = toPureObj({})
  const fuzzyQueryAttr = toPureObj({subjectName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await subjectService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await subjectService.create(entity)
  ctx.body = ret
})

// router.post('/update/:id', async ctx => {
//   const entity = ctx.request.body
//   const {id} = ctx.params
//   // console.log(entity)
//   const ret = await subjectService.update(id, entity)
//   ctx.body = ret
// })

router.get('/delete/:id', async ctx => {
  const {id} = ctx.params
  const ret = await subjectService.delete(id)
  ctx.body = ret
})

export default router