/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {XuankaoService} from '../XuanKaoService'
import {XuankaoDao, XuanKaoInfo} from '../../dao/XuanKaoDao'
import {XuanKaoDaoImpl} from '../../dao/impl/XuanKaoDaoImpl'
import XuanKao from '../../db/models/xuankao'

export class XuanKaoServiceImpl implements XuankaoService {
  create(entity: XuanKaoInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<XuanKao>> {
    return undefined;
  }

  findByIdNumber(idNumber: string) {
  }
  private xuanKaoDao: XuankaoDao

  constructor() {
    this.xuanKaoDao = new XuanKaoDaoImpl()
  }

}
