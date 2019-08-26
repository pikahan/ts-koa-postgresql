/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import {SubjectDao, SubjectInfo} from '../SubjectDao'
import Subject from '../../db/models/subject'

export class SubjectDaoImpl implements SubjectDao {
  constructor() {
    dbContext.init()
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