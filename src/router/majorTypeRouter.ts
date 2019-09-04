/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {MajorTypeService} from '../service/MajorTypeService'
import {MajorTypeServiceImpl} from '../service/impl/MajorTypeServiceImpl'

const router = new Router()
const majorTypeService: MajorTypeService = new MajorTypeServiceImpl()

// findBySchoolName
// router.post('/name', async ctx => {
//   const { schoolName } = ctx.request.body
//   if (schoolName) {
//     ctx.body = await majorTypeService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, majorId, majorName, majorType} = ctx.query
  const exactQueryAttr = toPureObj({majorId, majorType})
  const fuzzyQueryAttr = toPureObj({majorName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await majorTypeService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await majorTypeService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  if (entity) {
    const ret = await majorTypeService.update(id, entity)
    ctx.body = ret
  }
})

router.get('/delete/:id', async ctx => {
  const { id } = ctx.params
  const ret = await majorTypeService.delete(id)
  ctx.body = ret
})

export default router