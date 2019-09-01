/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import { RegistrationService } from '../service/RegistrationService'
import { RegistrationServiceImpl } from '../service/impl/RegistrationServiceImpl'
import {toPureObj} from '../util/help'

const router = new Router()
const registrationService: RegistrationService = new RegistrationServiceImpl()

router.get('/', async ctx => {
  const {currPage, limit, schoolName, startTime, endTime} = ctx.query
  const exactQueryAttr = toPureObj({})
  const fuzzyQueryAttr = toPureObj({startTime, endTime})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await registrationService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await registrationService.create(entity)
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
  const ret = await registrationService.delete(id)
  ctx.body = ret
})

export default router