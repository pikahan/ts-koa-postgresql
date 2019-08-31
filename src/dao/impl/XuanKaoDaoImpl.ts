/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {XuankaoDao, XuanKaoInfo} from '../XuanKaoDao'
import XuanKao from '../../db/models/xuankao'
import Speciality from '../../db/models/speciality'
import {SubjectInfo} from '../SubjectDao'
import Subject from '../../db/models/subject'
import School from '../../db/models/school'

export class XuanKaoDaoImpl implements XuankaoDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: XuanKaoInfo): Promise<XuanKaoInfo> {
    return await XuanKao.create(entity)
  }

  public async delete(id: number) {
    return await XuanKao.destroy({
      where: {
        id
      }
    })
  }

  public async update(id, entity) {
    return await XuanKao.update( entity, { where: { id } })
  }

  public async findAll(): Promise<Array<XuanKaoInfo>> {
    return await XuanKao.findAll({ raw: true });
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await XuanKao.findAll({ raw: true, limit, offset: currPage })
  }

  findByIdNumber(idNumber: string) {
  }

  public async findById(id: number) {
    return await XuanKao.findOne({
      where: {
        id,
      },
    })
  }

}