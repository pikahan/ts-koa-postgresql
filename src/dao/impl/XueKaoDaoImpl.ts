/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {XuekaoDao, XueKaoInfo} from '../XueKaoDao'
import XueKao from '../../db/models/xuekao'

export class XueKaoDaoImpl implements XuekaoDao {
  constructor() {
    dbContext.init()
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