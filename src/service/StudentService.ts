/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Student from '../db/models/student'
import {SpecialityService} from './SpecialityService'
import {StudentInfo} from '../dao/StudentDao'

export interface StudentService {
  /**
   *
   * @returns {Student}
   */
  findAll(): Promise<Array<Student>>

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
