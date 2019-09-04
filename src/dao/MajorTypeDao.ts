/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {UserInfo} from './UserDao'
import {SchoolInfo} from './SchoolDao'
import {QueryOption} from '../util/help'

export interface MajorTypeDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<MajorTypeInfo>>


  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: MajorTypeInfo): Promise<MajorTypeInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: MajorTypeInfo): Promise<MajorTypeInfo>

}
export interface MajorTypeInfo {
  id?: number
  majorId: number
  majorName: string
  majorType: string
}

