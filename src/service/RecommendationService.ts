/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {MajorInfo, MajorViewInfo} from '../dao/MajorDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'
import {MajorTypeInfo} from '../dao/MajorTypeDao'
import {RecommendationInfo} from '../dao/RecommendationDao'

export interface RecommendationService {
  /**
   *
   * @returns {Major}
   */
  findAll(idNumber: string): Promise<Response<Array<RecommendationInfo>>>


  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: RecommendationInfo): Promise<Response<RecommendationInfo>>

  /**
   * @name 查询
   * @param {number} id
   */
  // delete(id: number)


  update(id, entity: RecommendationInfo)
}
