/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Student from '../db/models/student'
import {SpecialityInfo} from './SpecialityDao'

export interface StudentDao {
  /**
   *
   * @returns {Student}
   */
  findAll(): Promise<Array<StudentInfo>>

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

  update(id: number, entity: StudentInfo)

}
export interface StudentInfo {
  id?: string
  idNumber: string
  sex: string
  phoneNumber: string
  name: string
  highSchoolName: string
  province: string
}