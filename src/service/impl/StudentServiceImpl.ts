/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {StudentService} from '../StudentService'
import {StudentDao, StudentInfo} from '../../dao/StudentDao'
import {StudentDaoImpl} from '../../dao/impl/StudentDaoImpl'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {SchoolInfo} from '../../dao/SchoolDao'
import {STATUS} from '../../util/constant'

export class StudentServiceImpl implements StudentService {
  private studentDao: StudentDao

  constructor() {
    this.studentDao = new StudentDaoImpl()
  }

  public async create(entity: StudentInfo) {
    try {
      const data = await this.studentDao.create(entity)
      return {
        code: ResponseCode.OK,
        message: '创建成功',
        response: data
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: "创建失败: 编号重复"
      }
    }
  }

  public async update(id: number, entity: StudentInfo): Promise<Response<Array<StudentInfo>>> {
    try {
      const res = await this.studentDao.update(id, entity)

      return {
        code: STATUS.OK,
        message: 'ok',
        response: res
      }
    } catch (e) {
      return {
        code: STATUS.ERROR,
        message: '身份证信息重复'
      }
    }
  }

  public async updateByUsername(username: string, entity: StudentInfo): Promise<Response<Array<StudentInfo>>> {
    try {
      const user = await this.studentDao.findUserByUsername(username)
      return this.update(user.studentId, entity)
    } catch (e) {
      return {
        code: STATUS.ERROR,
        message: 'error'
      }
    }
  }


  public async createAndUpdateUser(username: string, entity: StudentInfo) {
    try {
      const data = await this.studentDao.createAndUpdateUser(username, entity)
      console.log(data)
      return {
        code: ResponseCode.OK,
        message: 'ok',
        data
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '已有重复信息'
      }
    }
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