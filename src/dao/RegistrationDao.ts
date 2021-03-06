/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */

import {QueryOption} from '../util/help'
import Promise from 'sequelize/types/lib/promise'
import {SchoolInfo} from './SchoolDao'

export interface RegistrationDao {
  /**
   *
   * @returns {User}
   */
  findAll(queryOption: QueryOption): Promise<Array<RegistrationInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<RegistrationInfo>>

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

  findSchoolIdBySchoolName(schoolName: string): Promise<SchoolInfo>

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

export interface RegistrationViewInfo {
  id?: string
  schoolName: string
  year: string
  conditions: string
  startTime: Date
  endTime: Date
  registration_way: string
}