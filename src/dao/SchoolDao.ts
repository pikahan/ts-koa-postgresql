/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import School from '../db/models/school'
import {SpecialityInfo} from './SpecialityDao'

export interface SchoolDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<SchoolInfo>>

  /**
   *
   * @param {string} id
   */
  findById(id: number): Promise<SchoolInfo>

  /**
   *
   * @param {string} schoolId
   */
  findBySchoolId(schoolId: string): Promise<SchoolInfo>

  /**
   *
   * @param {string} schoolName
   * @returns {Promise<Array<School>>}
   */
  findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>>

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: SchoolInfo): Promise<SchoolInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: SchoolInfo)
}
export interface SchoolInfo {
  id?: string
  schoolId: string
  schoolName: string
  province: string
  city: string
  description?: string
}