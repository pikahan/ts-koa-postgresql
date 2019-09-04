/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {MajorDao, MajorInfo} from '../MajorDao'
import Major from '../../db/models/major'
import {Op} from 'sequelize'
import {queryOption2SequelizeQueryOption} from '../../util/help'
import MajorView from '../../db/models/major_view'
import Major_type, {default as MajorType} from '../../db/models/major_type'
import {SchoolInfo} from '../SchoolDao'
import School from '../../db/models/school'
import {MajorTypeDao, MajorTypeInfo} from '../MajorTypeDao'

export class MajorTypeDaoImpl implements MajorTypeDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: MajorTypeInfo): Promise<MajorTypeInfo> {
    return await MajorType.create(entity)
  }

  public async delete(id: number) {
    return await MajorType.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(queryOption): Promise<Array<MajorTypeInfo>> {
    return await MajorType.findAll(queryOption2SequelizeQueryOption(queryOption));
  }


  public async update(id: number , entity: MajorTypeInfo) {
    return await MajorType.update( entity, { where: { id } })
  }


}