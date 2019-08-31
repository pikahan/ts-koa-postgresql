/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {MajorInfo, MajorViewInfo} from '../dao/MajorDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'

export interface MajorService {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<MajorInfo>>>

  /**
   *
   * @param {string} majorId
   */
  findByMajorId(majorId: string): Promise<Response<MajorInfo>>

  /**
   *
   * @param {string} majorName
   * @returns {Promise<Array<Major>>}
   */
  findByMajorName(majorName: string): Promise<Array<Major>>


  /**
   * 
   * @param {number} schoolId
   * @returns {Promise<Array<Major>>}
   */
  findBySchoolId(schoolId: number): Promise<Array<Major>>

  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: MajorViewInfo): Promise<Response<MajorInfo>>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id, entity: MajorViewInfo)
}
