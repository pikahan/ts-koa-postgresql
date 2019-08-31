/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {UserInfo} from './UserDao'
import {SchoolInfo} from './SchoolDao'
import {QueryOption} from '../util/help'

export interface MajorDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<MajorInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<MajorInfo>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<MajorInfo>

  /**
   *
   * @param {string} majorName
   * @returns {Promise<Array<Major>>}
   */
  findByMajorName(majorName: string): Promise<Array<MajorInfo>>


  /**
   * 
   * @param {number} schoolId
   * @returns {Promise<Array<Major>>}
   */
  findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>>

  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: MajorInfo): Promise<MajorInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: MajorInfo): Promise<MajorInfo>

}
export interface MajorInfo {
  id?: number
  majorTypeId: number
  schoolId: string
}

export interface MajorViewInfo {
  id?: number
  majorTypeId: number
  majorName: string
  majorType: string
  schoolName: string
}