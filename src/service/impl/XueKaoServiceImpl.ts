/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import {XuekaoService} from '../XueKaoService'
import {XuekaoDao, XueKaoInfo} from '../../dao/XueKaoDao'
import {XueKaoDaoImpl} from '../../dao/impl/XueKaoDaoImpl'
import XueKao from '../../db/models/xuekao'

export class XueKaoServiceImpl implements XuekaoService {
  private xueKaoDao: XuekaoDao

  constructor() {
    this.xueKaoDao = new XueKaoDaoImpl()
  }

  create(entity: XueKaoInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<XueKao>> {
    return undefined;
  }

  findByIdNumber(idNumber: string) {
  }



}
