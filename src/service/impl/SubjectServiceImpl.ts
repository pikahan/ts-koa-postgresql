/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {SubjectService} from '../SubjectService'
import {SubjectDao, SubjectInfo} from '../../dao/SubjectDao'
import {SubjectDaoImpl} from '../../dao/impl/SubjectDaoImpl'
import Subject from '../../db/models/subject'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {SchoolInfo} from '../../dao/SchoolDao'

export class SubjectServiceImpl implements SubjectService {
  private subjectDao: SubjectDao

  constructor() {
    this.subjectDao = new SubjectDaoImpl()
  }

  create(entity: SubjectInfo) {
  }

  delete(id: number) {
  }

  public async findAll(queryOption): Promise<Response<Array<SubjectInfo>>> {
    try {
      const data = await this.subjectDao.findAll(queryOption)
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }

  findById(subjectId: number) {
  }

  findBySubjectName(subjectName: string) {
  }

}
