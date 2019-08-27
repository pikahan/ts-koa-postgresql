/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import Registration from '../db/models/registration'
import {MajorInfo} from './MajorDao'

export interface RegistrationDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<RegistrationInfo>>

  /**
   *
   * @param {string} id
   */
  findById(id: number): Promise<RegistrationInfo>

  /**
   *
   * @param {string} schoolId
   */
  findBySchoolId(schoolId: number): Promise<Array<RegistrationInfo>>

  /**
   * 创建
   * @param {RegistrationInfo} entity
   */
  create(entity: RegistrationInfo): Promise<RegistrationInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: RegistrationInfo): Promise<RegistrationInfo>

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