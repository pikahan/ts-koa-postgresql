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

  public async delete(id: number) {
    try {
      const data = await this.studentDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功',
      }
    } catch (e) {
      console.log(e)
      const eMessage = e.toString()
      const ret = {
        code: ResponseCode.ERROR,
        message: '删除失败'
      }

      if (eMessage.indexOf('xuankao_id_number_fkey') > -1) {
        ret.message = '请先删除选考中包含此学生的记录'
      }

      if (eMessage.indexOf('xuekao_id_number_fkey') > -1) {
        ret.message = '请先删除学考中包含此学生的记录'
      }

      if (eMessage.indexOf('speciality_id_number_fkey') > -1) {
        ret.message = '请先删除特长中包含此学生的记录'
      }

      return ret
    }
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