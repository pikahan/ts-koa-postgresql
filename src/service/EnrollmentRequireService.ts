/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import {MajorInfo, MajorViewInfo} from '../dao/MajorDao'
import {EnrollmentInfo, EnrollmentViewInfo} from '../dao/EnrollmentDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'
import {EnrollmentRequireInfo, EnrollmentRequireViewInfo} from '../dao/EnrollmentRequireDao'

export interface EnrollmentRequireService {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<EnrollmentRequireViewInfo>>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<EnrollmentRequireInfo>



  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: EnrollmentRequireViewInfo): Promise<Response<EnrollmentRequireViewInfo>>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: EnrollmentRequireViewInfo): Promise<Response<EnrollmentRequireViewInfo>>

}
