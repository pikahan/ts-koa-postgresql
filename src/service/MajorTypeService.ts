/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {MajorInfo, MajorViewInfo} from '../dao/MajorDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'
import {MajorTypeInfo} from '../dao/MajorTypeDao'

export interface MajorTypeService {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<MajorTypeInfo>>>


  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: MajorTypeInfo): Promise<Response<MajorTypeInfo>>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)


  update(id, entity: MajorTypeInfo)
}
