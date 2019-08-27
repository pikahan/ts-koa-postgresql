/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import School from '../db/models/school'
import {SchoolInfo} from '../dao/SchoolDao'

export interface SchoolService {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<School>>

  /**
   *
   * @param {string} id
   */
  findById(id: number): Promise<School>

  /**
   *
   * @param {string} schoolId
   */
  findBySchoolId(schoolId: string): Promise<School>

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
  create(entity: SchoolInfo): Promise<School>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
