/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XuanKao from '../db/models/xuankao'
import {XuanKaoInfo, XuanKaoViewInfo} from '../dao/XuanKaoDao'
import {Response} from '../util/type'
import {QueryOption} from '../util/help'
import {MajorInfo} from '../dao/MajorDao'

export interface XuankaoService {
  /**
   *
   * @returns {XuanKao}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<XuanKaoInfo>>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

  /**
   * 创建
   * @param {XuanKaoInfo} entity
   */
  create(entity: XuanKaoViewInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: XuanKaoInfo)
}
