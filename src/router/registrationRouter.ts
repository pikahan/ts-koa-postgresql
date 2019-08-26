/*
 * @Description: 后台路由组件
 * @version: 0.1.0
 */
import * as Router from 'koa-router';
import { STATUS } from '../util/constant'
import { RegistrationService } from '../service/RegistrationService';
import { RegistrationServiceImpl } from '../service/impl/RegistrationServiceImpl';

const router = new Router();
const registrationService: RegistrationService = new RegistrationServiceImpl();

router.get('/', async (ctx) => {
  ctx.body = await registrationService.findAll();

})

router.get('/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await registrationService.findById(id)

})

export default router