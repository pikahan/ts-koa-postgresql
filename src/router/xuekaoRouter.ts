/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import { XuekaoService } from '../service/XueKaoService'
import { XueKaoServiceImpl } from '../service/impl/XueKaoServiceImpl'
import {toPureObj} from '../util/help'

const router = new Router()
const xuekaoService: XuekaoService = new XueKaoServiceImpl()

router.get('/', async ctx => {
  const {currPage, limit, name, idNumber, subjectName, level} = ctx.query
  const exactQueryAttr = toPureObj({idNumber, level})
  const fuzzyQueryAttr = toPureObj({name, subjectName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await xuekaoService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await xuekaoService.create(entity)
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
  const ret = await xuekaoService.delete(id)
  ctx.body = ret
})

export default router