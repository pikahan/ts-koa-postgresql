/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {MajorService} from '../service/MajorService'
import {MajorServiceImpl} from '../service/impl/MajorServiceImpl'

const router = new Router()
const majorService: MajorService = new MajorServiceImpl()

// findBySchoolName
// router.post('/name', async ctx => {
//   const { schoolName } = ctx.request.body
//   if (schoolName) {
//     ctx.body = await majorService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, schoolName, majorId, majorName, majorType} = ctx.query
  const exactQueryAttr = toPureObj({majorId})
  const fuzzyQueryAttr = toPureObj({majorName, majorType, schoolName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await majorService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await majorService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  if (entity) {
    const ret = await majorService.update(id, entity)
    ctx.body = ret
  }
})

router.get('/delete/:id', async ctx => {
  const { id } = ctx.params
  const ret = await majorService.delete(id)
  ctx.body = ret
})

export default router