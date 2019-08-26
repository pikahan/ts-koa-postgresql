/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'

export interface MajorDao {
  /**
   *
   * @returns {Major}
   */
  findAll(): Promise<Array<Major>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<Major>

  /**
   *
   * @param {string} majorName
   * @returns {Promise<Array<Major>>}
   */
  findByMajorName(majorName: string): Promise<Array<Major>>


  /**
   * 
   * @param {number} schoolId
   * @returns {Promise<Array<Major>>}
   */
  findBySchoolId(schoolId: number): Promise<Array<Major>>

  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: MajorInfo): Promise<Major>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
export interface MajorInfo {
  majorId: string
  majorName: string
  majorType: string
  schoolId: string
}