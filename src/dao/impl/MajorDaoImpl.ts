/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {MajorDao, MajorInfo} from '../MajorDao'
import Major from '../../db/models/major'
import {Op} from 'sequelize'
import {queryOption2SequelizeQueryOption} from '../../util/help'
import Major_view from '../../db/models/major_view'
import Major_type from '../../db/models/major_type'
import {SchoolInfo} from '../SchoolDao'
import School from '../../db/models/school'

export class MajorDaoImpl implements MajorDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: MajorInfo): Promise<MajorInfo> {
    return await Major.create(entity)
  }

  public async delete(id: number) {
    return await Major.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(queryOption): Promise<Array<MajorInfo>> {
    return await Major_view.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await Major.findAll({ raw: true, limit, offset: currPage })
  }

  public async findByMajorId(majorId: string): Promise<MajorInfo> {
    return await Major.findOne({ raw: true, where: { majorId } });
  }

  public async findByMajorName(majorName: string): Promise<Array<MajorInfo>> {
    return await Major_type.findOne({
      raw: true,
      where: {
        majorName
      }
    })
  }

  public async findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>> {
    return await School.findOne({ raw: true, where: { schoolName } });
  }

  public async update(id: number , entity: MajorInfo) {
    return await Major.update( entity, { where: { id } })
  }


}