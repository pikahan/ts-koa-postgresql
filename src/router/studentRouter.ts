/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {StudentService} from '../service/StudentService'
import {StudentServiceImpl} from '../service/impl/StudentServiceImpl'

const router = new Router()
const studentService: StudentService = new StudentServiceImpl()

// findBySchoolName
// router.post('/name', async ctx => {
//   const {schoolName} = ctx.request.body
//   if (schoolName) {
//     ctx.body = await studentService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, idNumber, sex, phoneNumber, name, highSchoolName, province, id} = ctx.query
  const exactQueryAttr = toPureObj({province, phoneNumber, sex, idNumber, id})
  const fuzzyQueryAttr = toPureObj({name, highSchoolName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await studentService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await studentService.create(entity)
  ctx.body = ret
})

// router.post('/update/:id', async ctx => {
//   const entity = ctx.request.body
//   const {id} = ctx.params
//   // console.log(entity)
//   const ret = await studentService.update(id, entity)
//   ctx.body = ret
// })

router.get('/delete/:id', async ctx => {
  const {id} = ctx.params
  const ret = await studentService.delete(id)
  ctx.body = ret
})

export default router