/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XueKao from '../db/models/xuekao'
import {XueKaoInfo} from '../dao/XueKaoDao'

export interface XuekaoService {
  /**
   *
   * @returns {XueKao}
   */
  findAll(currPage?: number, pageSize?: number): Promise<Array<XueKao>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

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
}
