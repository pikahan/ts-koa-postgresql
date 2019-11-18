/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {QueryOption} from '../util/help'

export interface RecommendationDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<RecommendationInfo>>


  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: RecommendationInfo): Promise<RecommendationInfo>

  findXuekaoInfoByIdNumber(idNumber: string)

  findXuankaoInfoByIdNumber(idNumber: string)

  findEnrollmentRequireInfoByYear(year: number)

  findEnrollmentInfoByYear(year: number)

  delete(idNumber: string)

  update(id: number, entity: RecommendationInfo): Promise<RecommendationInfo>

}
export interface RecommendationInfo {
  id?: number
  idNumber: string
  subjectId: string
  reason: string
}

export interface RecommendationViewInfo {
  id?: number
  name: string
  subjectName: string
  schoolName: string
  reason: string
}

