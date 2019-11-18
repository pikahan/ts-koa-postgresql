/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {StudentDao, StudentInfo} from '../StudentDao'
import Student from '../../db/models/student'
import School from '../../db/models/school'
import {QueryOption, queryOption2SequelizeQueryOption} from '../../util/help'
import {Sequelize} from 'sequelize-typescript'
import * as sequelize from 'sequelize'
import User from '../../db/models/user'

export class StudentDaoImpl implements StudentDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: StudentInfo): Promise<StudentInfo> {
    return await Student.create(entity)
  }

  public async update(id, entity) {
    return await Student.update( entity, { where: { id } })
  }

  public async delete(id: number) {
    return await Student.destroy({
      where: {
        id
      }
    })
  }

  public async findUserByUsername(username: string) {
    return await User.findOne({
      raw: true,
      where: {
        username
      }
    })
  }

  public async findAll(queryOption: QueryOption): Promise<Array<StudentInfo>> {
    return await Student.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await Student.findAll({ raw: true, limit, offset: currPage })
  }

  public async findById(id: number) {
    return await Student.findOne({
      where: {
        id,
      },
    })
  }

  public async createAndUpdateUser(username: string, entity: StudentInfo) {
    const idNumber = entity.idNumber ? entity.idNumber : null
    const sex = entity.sex ? entity.sex : null
    const phoneNumber = entity.phoneNumber ? entity.phoneNumber : null
    const name = entity.name ? entity.name : null
    const highSchoolName = entity.highSchoolName ? entity.highSchoolName : null
    const province = entity.highSchoolName ? entity.province : null
    return await dbContext.getInstance().query('SELECT (insert_records_into_student_and_update_user(:username, :idNumber, :sex, :phoneNumber, :name, :highSchoolName, :province))', {
      replacements: { username, idNumber, sex, phoneNumber, name,  highSchoolName, province}, type: sequelize.QueryTypes.SELECT
    })
  }

  findByIdNumber(idNumber: string) {
  }
}