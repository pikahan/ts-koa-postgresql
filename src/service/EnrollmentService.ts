/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {MajorInfo, MajorViewInfo} from '../dao/MajorDao'
import {EnrollmentInfo, EnrollmentViewInfo} from '../dao/EnrollmentDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'

export interface EnrollmentService {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<EnrollmentInfo>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<EnrollmentInfo>



  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: EnrollmentViewInfo): Promise<EnrollmentInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: EnrollmentViewInfo): Promise<Response<EnrollmentInfo>>

}
