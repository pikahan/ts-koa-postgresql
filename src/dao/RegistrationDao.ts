/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import Registration from '../db/models/registration'

export interface RegistrationDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<Registration>>

  /**
   *
   * @param {string} id
   */
  findById(id: number): Promise<Registration>

  /**
   *
   * @param {string} schoolId
   */
  findBySchoolId(schoolId: number): Promise<Array<Registration>>

  /**
   * 创建
   * @param {RegistrationInfo} entity
   */
  create(entity: RegistrationInfo): Promise<Registration>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
export interface RegistrationInfo {
  id?: string
  schoolId: string
  year: string
  conditions: string
  startTime: Date
  endTime: Date
  registration_way: string
}