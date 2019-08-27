/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {XuekaoDao, XueKaoInfo} from '../XueKaoDao'
import XueKao from '../../db/models/xuekao'
import Speciality from '../../db/models/speciality'
import {SubjectInfo} from '../SubjectDao'
import XuanKao from '../../db/models/xuankao'
import {XuanKaoInfo} from '../XuanKaoDao'
import School from '../../db/models/school'

export class XueKaoDaoImpl implements XuekaoDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: XueKaoInfo): Promise<XueKaoInfo> {
    return await XueKao.create(entity)
  }

  public async delete(id: number) {
    return await XueKao.destroy({
      where: {
        id
      }
    })
  }

  public async update(id, entity) {
    return await XueKao.update( entity, { where: { id } })
  }

  public async findAll(): Promise<Array<XueKaoInfo>> {
    return await XueKao.findAll({ raw: true });
  }

  findByIdNumber(idNumber: string) {
  }

  public async findById(id: number) {
    return await XueKao.findOne({
      where: {
        id,
      },
    })
  }

}