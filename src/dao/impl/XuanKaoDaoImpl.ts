/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {XuankaoDao, XuanKaoInfo} from '../XuanKaoDao'
import XuanKao from '../../db/models/xuankao'

export class XuanKaoDaoImpl implements XuankaoDao {
  constructor() {
    dbContext.init()
  }

  create(entity: XuanKaoInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<XuanKao>> {
    return undefined;
  }

  findByIdNumber(idNumber: string) {
  }


}