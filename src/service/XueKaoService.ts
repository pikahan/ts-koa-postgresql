/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XueKao from '../db/models/xuekao'
import {XueKaoInfo, XueKaoViewInfo} from '../dao/XueKaoDao'
import {Response} from '../util/type'
import {QueryOption} from '../util/help'
import {XuanKaoInfo} from '../dao/XuanKaoDao'

export interface XuekaoService {
  /**
   *
   * @returns {XueKao}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<XueKaoInfo>>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: XueKaoViewInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: XueKaoInfo)

}
