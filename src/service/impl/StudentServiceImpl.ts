/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {StudentService} from '../StudentService'
import {StudentDao, StudentInfo} from '../../dao/StudentDao'
import {StudentDaoImpl} from '../../dao/impl/StudentDaoImpl'
import Student from '../../db/models/student'

export class StudentServiceImpl implements StudentService {
  private studentDao: StudentDao

  constructor() {
    this.studentDao = new StudentDaoImpl()
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