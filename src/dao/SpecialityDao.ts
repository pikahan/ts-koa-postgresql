/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Speciality from '../db/models/speciality'
import {SchoolInfo} from './SchoolDao'

export interface SpecialityDao {
  /**
   *
   * @returns {Student}
   */
  findAll(): Promise<Array<SpecialityInfo>>

  /**
   * @param {number} id
   */
  findById(id: number): Promise<SpecialityInfo>

  /**
   *
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string): Promise<Array<SpecialityInfo>>


  /**
   * @name 创建
   * @param {StudentInfo} entity
   */
  create(entity: SpecialityInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: SpecialityInfo)

}
export interface SpecialityInfo {
  id?: string
  idNumber: string
  type: string
  level: string
  name: string
  description: string
  materials: string
}