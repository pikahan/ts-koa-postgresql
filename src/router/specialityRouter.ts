/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import { SpecialityService } from '../service/SpecialityService'
import { SpecialityServiceImpl } from '../service/impl/SpecialityServiceImpl'
import {toPureObj} from '../util/help'

const router = new Router()
const specialityService: SpecialityService = new SpecialityServiceImpl()

router.get('/', async ctx => {
  const {currPage, limit, name, idNumber, type, level} = ctx.query
  const exactQueryAttr = toPureObj({idNumber, type, level})
  const fuzzyQueryAttr = toPureObj({name})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await specialityService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await specialityService.create(entity)
  ctx.body = ret
})

// router.post('/update/:id', async ctx => {
//   const entity = ctx.request.body
//   const {id} = ctx.params
//   if (entity) {
//     const ret = await registrationService.update(id, entity)
//     ctx.body = ret
//   }
// })

router.get('/delete/:id', async ctx => {
  const { id } = ctx.params
  const ret = await specialityService.delete(id)
  ctx.body = ret
})

export default router