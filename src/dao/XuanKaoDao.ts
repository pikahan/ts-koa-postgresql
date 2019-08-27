/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XuanKao from '../db/models/xuankao'
import {UserInfo} from './UserDao'

export interface XuankaoDao {
  /**
   *
   * @returns {XuanKao}
   */
  findAll(): Promise<Array<XuanKaoInfo>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)


  findById(id: number)

  /**
   * 创建
   * @param {XuanKaoInfo} entity
   */
  create(entity: XuanKaoInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: XuanKaoInfo): Promise<XuanKaoInfo>

}
export interface XuanKaoInfo {
  id?: string
  idNumber: string
  subjectId: string
  grade: string
}