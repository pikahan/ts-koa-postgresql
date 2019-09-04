/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {SubjectDao, SubjectInfo} from '../SubjectDao'
import Subject from '../../db/models/subject'
import Speciality from '../../db/models/speciality'
import {SpecialityInfo} from '../SpecialityDao'
import Student from '../../db/models/student'
import {StudentInfo} from '../StudentDao'
import School from '../../db/models/school'
import {queryOption2SequelizeQueryOption} from '../../util/help'

export class SubjectDaoImpl implements SubjectDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: SubjectInfo): Promise<SubjectInfo> {
    console.log(entity)
    return await Subject.create(entity)
  }

  public async delete(id: number) {
    return await Subject.destroy({
      where: {
        id
      }
    })
  }

  public async update(id, entity) {
    return await Subject.update( entity, { where: { id } })
  }

  public async findAll(queryOption): Promise<Array<SubjectInfo>> {
    return await Subject.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await Subject.findAll({ raw: true, limit, offset: currPage })
  }

  public async findById(id: number) {
    return await Subject.findOne({
      where: {
        id,
      },
    })
  }

  findBySubjectName(subjectName: string) {
  }


}