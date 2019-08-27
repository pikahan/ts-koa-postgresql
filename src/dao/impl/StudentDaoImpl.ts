/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {StudentDao, StudentInfo} from '../StudentDao'
import Student from '../../db/models/student'
import Speciality from '../../db/models/speciality'
import {SpecialityInfo} from '../SpecialityDao'
import School from '../../db/models/school'

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

  public async findAll(): Promise<Array<StudentInfo>> {
    return await Student.findAll({ raw: true });
  }

  public async findById(id: number) {
    return await Student.findOne({
      where: {
        id,
      },
    })
  }

  findByIdNumber(idNumber: string) {
  }
}