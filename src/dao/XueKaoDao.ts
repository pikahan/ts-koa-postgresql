/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XueKao from '../db/models/xuekao'
import {XuanKaoInfo} from './XuanKaoDao'

export interface XuekaoDao {
  /**
   *
   * @returns {XueKao}
   */
  findAll(): Promise<Array<XueKaoInfo>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

  findById(id: number)

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: XueKaoInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: XueKaoInfo): Promise<XueKaoInfo>


}
export interface XueKaoInfo {
  id?: string
  idNumber: string
  subjectId: string
  level: string
}