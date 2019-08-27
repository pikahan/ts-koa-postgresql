/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {MajorDao, MajorInfo} from '../MajorDao'
import Major from '../../db/models/major'
import School from '../../db/models/school'
import {SchoolInfo} from '../SchoolDao'
import User from '../../db/models/user'
import {UserInfo} from '../UserDao'
import {Op} from 'sequelize'

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

  public async findAll(): Promise<Array<MajorInfo>> {
    return await Major.findAll({ raw: true });
  }

  public async findByMajorId(majorId: string): Promise<MajorInfo> {
    return await Major.findOne({ raw: true, where: { majorId } });
  }

  public async findByMajorName(majorName: string): Promise<Array<MajorInfo>> {
    return await Major.findAll({
      raw: true,
      where: {
        majorName: { [Op.like]: `%${majorName}%` }
      }
    })
  }

  public async findBySchoolId(schoolId: number): Promise<Array<MajorInfo>> {
    return await Major.findAll({ raw: true, where: { schoolId } });
  }

  public async update(id: number , entity: MajorInfo) {
    return await Major.update( entity, { where: { id } })
  }


}