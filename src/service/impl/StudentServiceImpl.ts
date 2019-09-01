/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {StudentService} from '../StudentService'
import {StudentDao, StudentInfo} from '../../dao/StudentDao'
import {StudentDaoImpl} from '../../dao/impl/StudentDaoImpl'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {SchoolInfo} from '../../dao/SchoolDao'

export class StudentServiceImpl implements StudentService {
  private studentDao: StudentDao

  constructor() {
    this.studentDao = new StudentDaoImpl()
  }

  create(entity: StudentInfo) {
  }

  delete(id: number) {
  }

  public async findAll(queryOption): Promise<Response<Array<StudentInfo>>> {
    try {
      const data = await this.studentDao.findAll(queryOption)
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

  findById(id: number) {
  }

  findByIdNumber(idNumber: string) {
  }

}