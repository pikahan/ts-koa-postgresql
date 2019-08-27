/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {SchoolDao, SchoolInfo} from '../SchoolDao'
import School from '../../db/models/school'
import {where} from 'sequelize'
import Op = require('sequelize/types/lib/operators')

export class SchoolDaoImpl implements SchoolDao {
  constructor() {
    dbContext.init()
  }

  create(entity: SchoolInfo): Promise<School> {
    return undefined;
  }

  public async delete(id: number) {
    return await School.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(): Promise<Array<SchoolInfo>> {
    return await School.findAll({ raw: true });
  }

  findById(id: number): Promise<School> {
    return undefined;
  }

  findBySchoolId(schoolId: string): Promise<School> {
    return undefined;
  }

  public async findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>> {
    return await School.findAll({
      raw: true,
      where: {
        schoolName: { [Op.like]: `%${schoolName}%` }
      }
    })
  }

  public async update(id, entity) {
    return await School.update( entity, { where: { id } })
  }

}