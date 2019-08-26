/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {SubjectService} from '../SubjectService'
import {SubjectDao, SubjectInfo} from '../../dao/SubjectDao'
import {SubjectDaoImpl} from '../../dao/impl/SubjectDaoImpl'
import Subject from '../../db/models/subject'

export class SubjectServiceImpl implements SubjectService {
  private subjectDao: SubjectDao

  constructor() {
    this.subjectDao = new SubjectDaoImpl()
  }

  create(entity: SubjectInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<Subject>> {
    return undefined;
  }

  findById(subjectId: number) {
  }

  findBySubjectName(subjectName: string) {
  }

}
