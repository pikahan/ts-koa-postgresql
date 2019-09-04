/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import { XuankaoService } from '../service/XuanKaoService'
import { XuanKaoServiceImpl } from '../service/impl/XuanKaoServiceImpl'
import {toPureObj} from '../util/help'

const router = new Router()
const xuankaoService: XuankaoService = new XuanKaoServiceImpl()

router.get('/', async ctx => {
  const {currPage, limit, name, idNumber, subjectName} = ctx.query
  const exactQueryAttr = toPureObj({idNumber})
  const fuzzyQueryAttr = toPureObj({name, subjectName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})

  ctx.body = await xuankaoService.findAll(queryOption)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await xuankaoService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  if (entity) {
    const ret = await xuankaoService.update(id, entity)
    ctx.body = ret
  }
})

router.get('/delete/:id', async ctx => {
  const { id } = ctx.params
  const ret = await xuankaoService.delete(id)
  ctx.body = ret
})

export default router