/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {SpecialityDao, SpecialityInfo} from '../SpecialityDao'
import Speciality from '../../db/models/speciality'
import School from '../../db/models/school'
import {SchoolInfo} from '../SchoolDao'

export class SpecialityDaoImpl implements SpecialityDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: SpecialityInfo): Promise<SpecialityInfo> {
    return await Speciality.create(entity)
  }

  public async delete(id: number) {
    return await Speciality.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(): Promise<Array<SpecialityInfo>> {
    return await Speciality.findAll({ raw: true });
  }

  public async findById(id: number) {
    return await Speciality.findOne({
      where: {
        id,
      },
    })
  }

  findByIdNumber(idNumber: string): Promise<Array<SpecialityInfo>> {
    return undefined;
  }

  public async update(id, entity) {
    return await Speciality.update( entity, { where: { id } })
  }
}