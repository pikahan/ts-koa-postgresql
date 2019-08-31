/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {SchoolDao, SchoolInfo} from '../SchoolDao'
import School from '../../db/models/school'
import {Op} from 'sequelize'
import {PAGE_SIZE} from '../../util/constant'
import {QueryOption, queryOption2SequelizeQueryOption} from '../../util/help'

export class SchoolDaoImpl implements SchoolDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: SchoolInfo): Promise<SchoolInfo> {
    return await School.create(entity)
  }

  public async delete(id: number) {
    return await School.destroy({
      where: {
        id
      }
    })
  }


  public async findAll(queryOption: QueryOption): Promise<Array<SchoolInfo>> {
    return await School.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await School.findAll({ raw: true, limit, offset: currPage })
  }

  public async findById(id: number) {
    return await School.findOne({
      where: {
        id,
      },
    })
  }

  findBySchoolId(schoolId: string): Promise<SchoolInfo> {
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