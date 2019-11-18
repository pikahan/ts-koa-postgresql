/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router'
import {toMd5, toPureObj} from '../util/help'
import {RecommendationService} from '../service/RecommendationService'
import {RecommendationServiceImpl} from '../service/impl/RecommendationServiceImpl'

const router = new Router()
const recommendationService: RecommendationService = new RecommendationServiceImpl()

// findBySchoolName
// router.post('/name', async ctx => {
//   const { schoolName } = ctx.request.body
//   if (schoolName) {
//     ctx.body = await majorTypeService.findBySchoolName(schoolName)
//   }
// })

// findAll ?currPage=1&limit=10
router.get('/', async ctx => {
  const {currPage, limit, idNumber, majorName, schoolName} = ctx.query
  const exactQueryAttr = toPureObj({})
  const fuzzyQueryAttr = toPureObj({majorName, schoolName})
  const limitOption = toPureObj({limit: limit, offset: currPage})
  const queryOption = toPureObj({exactQueryAttr, fuzzyQueryAttr, limitOption})
  console.log(idNumber)
  ctx.body = await recommendationService.findAll(idNumber)
})
//
router.post('/create', async ctx => {
  const entity = ctx.request.body
  console.log(entity)
  const ret = await recommendationService.create(entity)
  ctx.body = ret
})

router.post('/update/:id', async ctx => {
  const entity = ctx.request.body
  const {id} = ctx.params
  if (entity) {
    const ret = await recommendationService.update(id, entity)
    ctx.body = ret
  }
})

export default router