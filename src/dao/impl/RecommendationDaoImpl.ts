/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'

import {queryOption2SequelizeQueryOption} from '../../util/help'

import {RecommendationDao, RecommendationInfo, RecommendationViewInfo} from '../RecommendationDao'
import Recommendation from '../../db/models/recommendation'
import RecommendationView from '../../db/models/recommendation_view'
import XueKao from '../../db/models/xuekao'
import XuanKao from '../../db/models/xuankao'
import EnrollmentRequire from '../../db/models/enrollment_require'
import EnrollmentRequireView from '../../db/models/enrollment_require_view'
import EnrollmentView from '../../db/models/enrollment_view'
import XueKaoView from '../../db/models/xuekao_view'
import XuanKaoView from '../../db/models/xuankao_view'

export class RecommendationDaoImpl implements RecommendationDao {
  constructor() {
    dbContext.init()
  }

  public async findXuekaoInfoByIdNumber(idNumber: string) {
    return await XueKaoView.findAll({
      raw: true,
      where: {
        idNumber
      }
    })
  }

  public async findXuankaoInfoByIdNumber(idNumber: string) {
    return await XuanKaoView.findAll({
      raw: true,
      where: {
        idNumber
      }
    })
  }

  public async findEnrollmentRequireInfoByYear(year: number) {
    return await EnrollmentRequireView.findAll({
      raw: true,
      where: {
        year
      }
    })
  }

  public async findEnrollmentInfoByYear(year: number) {
    return await EnrollmentView.findAll({
      raw: true,
      where: {
        year
      }
    })
  }


  public async create(entity: RecommendationInfo): Promise<RecommendationInfo> {
    return await Recommendation.create(entity)
  }

  public async delete(idNumber: string) {
    return await Recommendation.destroy({
      where: {
        idNumber
      }
    })
  }

  public async findAll(queryOption): Promise<Array<RecommendationViewInfo>> {
    return await RecommendationView.findAll(queryOption2SequelizeQueryOption(queryOption));
  }


  public async update(id: number , entity: RecommendationInfo) {
    return await Recommendation.update( entity, { where: { id } })
  }


}