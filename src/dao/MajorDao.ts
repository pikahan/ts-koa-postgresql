/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {UserInfo} from './UserDao'

export interface MajorDao {
  /**
   *
   * @returns {Major}
   */
  findAll(): Promise<Array<MajorInfo>>

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
  findBySchoolId(schoolId: number): Promise<Array<MajorInfo>>

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
  id?: string
  majorId: string
  majorName: string
  majorType: string
  schoolId: string
}