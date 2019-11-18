/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {EnrollmentDao, EnrollmentInfo} from '../EnrollmentDao'
import Enrollment from '../../db/models/enrollment'
import {QueryOption, queryOption2SequelizeQueryOption} from '../../util/help'
import EnrollmentView from '../../db/models/enrollment_view'
import {SubjectInfo} from '../SubjectDao'
import Subject from '../../db/models/subject'
import {EnrollmentRequireDao, EnrollmentRequireInfo, EnrollmentRequireViewInfo} from '../EnrollmentRequireDao'
import EnrollmentRequireView from '../../db/models/enrollment_require_view'
import EnrollmentRequire from '../../db/models/enrollment_require'

export class EnrollmentRequireDaoImpl implements EnrollmentRequireDao {
  constructor() {
    dbContext.init()
  }


  public async create(entity: EnrollmentRequireInfo): Promise<EnrollmentRequireInfo> {
    return await EnrollmentRequire.create(entity)
  }

  public async delete(id: number) {
    return await EnrollmentRequire.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(queryOption: QueryOption): Promise<Array<EnrollmentRequireViewInfo>> {
    return await EnrollmentRequireView.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await EnrollmentRequire.findAll({ raw: true, limit, offset: currPage })
  }

  public async findBySubjectName(subjectName: string): Promise<Array<SubjectInfo>> {
    return await Subject.findOne({ raw: true , where: { subjectName }});
  }

  public async update(id: number , entity: EnrollmentRequireInfo) {

    return await EnrollmentRequire.update( entity, { where: { id } })
  }



  public async findEnrollmentIdBySchoolNameAndMajorNameAndYear(schoolName: string, majorName: string, year: number): Promise<EnrollmentInfo> {
    return await EnrollmentView.findOne({
      raw: true,
      where: {
        majorName,
        schoolName,
        year
      }
    })
  }

  public async findSubjectIdBySubjectName(subjectName: string): Promise<Subject> {
    return await Subject.findOne({
      raw: true,
      where: {
        subjectName
      }
    })
  }
}