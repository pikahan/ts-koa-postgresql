/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {SubjectService} from '../SubjectService'
import {SubjectDao, SubjectInfo} from '../../dao/SubjectDao'
import {SubjectDaoImpl} from '../../dao/impl/SubjectDaoImpl'
import Subject from '../../db/models/subject'
import {QueryOption} from '../../util/help'

export class SubjectServiceImpl implements SubjectService {
  private subjectDao: SubjectDao

  constructor() {
    this.subjectDao = new SubjectDaoImpl()
  }

  create(entity: SubjectInfo) {
  }

  delete(id: number) {
  }

  public async findAll(queryOption: QueryOption): Promise<Array<SubjectInfo>> {
    return await this.subjectDao.findAll(queryOption)
  }

  findById(subjectId: number) {
  }

  findBySubjectName(subjectName: string) {
  }

}
