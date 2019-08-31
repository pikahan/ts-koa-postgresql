/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {UserInfo} from './UserDao'
import {SchoolInfo} from './SchoolDao'
import {QueryOption} from '../util/help'

export interface EnrollmentDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<EnrollmentInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<EnrollmentInfo>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<Array<EnrollmentInfo>>


  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: EnrollmentInfo): Promise<EnrollmentInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: EnrollmentInfo): Promise<EnrollmentInfo>

}
export interface EnrollmentInfo {
  id?: number
  majorId: string
  subjectId: string
  year: string
  tuition: string
  otherRequirement: string
}