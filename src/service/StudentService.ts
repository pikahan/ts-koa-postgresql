/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Student from '../db/models/student'
import {StudentInfo} from '../dao/StudentDao'
import {QueryOption} from '../util/help'

export interface StudentService {
  /**
   *
   * @returns {Student}
   */
  findAll(queryOption: QueryOption): Promise<Array<StudentInfo>>

  /**
   * @param {number} id
   */
  findById(id: number)

  /**
   *
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)


  /**
   * @name 创建
   * @param {StudentInfo} entity
   */
  create(entity: StudentInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
