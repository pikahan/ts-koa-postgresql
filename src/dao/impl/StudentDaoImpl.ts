/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {StudentDao, StudentInfo} from '../StudentDao'
import Student from '../../db/models/student'

export class StudentDaoImpl implements StudentDao {
  constructor() {
    dbContext.init()
  }

  create(entity: StudentInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<Student>> {
    return undefined;
  }

  findById(id: number) {
  }

  findByIdNumber(idNumber: string) {
  }




}