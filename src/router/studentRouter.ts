/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {StudentService} from '../service/StudentService'
import {StudentServiceImpl} from '../service/impl/StudentServiceImpl'
import {type} from 'os'
import {STATUS} from '../util/constant'

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
router.post('/create/:username', async ctx => {
  const entity = ctx.request.body
  console.log('get create')

  let ret
  if (typeof ctx.params.username !== 'undefined') {
    ret = await studentService.createAndUpdateUser(ctx.params.username, entity)
  } else {
    ret = await studentService.create(entity)
  }
  console.log(entity)
  ctx.body = ret
})

router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log('get create')


  ctx.body = await studentService.create(entity)

})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body

  const {id} = ctx.params
  ctx.body = await studentService.update(id, entity)

})

router.post('/update', async ctx => {
  const entity = ctx.request.body
  let ret = {code: STATUS.ERROR, message: '身份证信息重复'}
  if (typeof entity.username !== 'undefined' ) {
    let {username, ...option} = entity
    ret = await studentService.updateByUsername(username, option)
  }
  // console.log(entity)
  ctx.body = ret
})

router.get('/delete/:id', async ctx => {
  const {id} = ctx.params
  const ret = await studentService.delete(id)
  ctx.body = ret
})

export default router