/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XuanKao from '../db/models/xuankao'
import {XuanKaoInfo} from '../dao/XuanKaoDao'

export interface XuankaoService {
  /**
   *
   * @returns {XuanKao}
   */
  findAll(): Promise<Array<XuanKao>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

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
}
