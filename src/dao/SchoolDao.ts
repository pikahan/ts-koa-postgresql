/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import School from '../db/models/school'

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