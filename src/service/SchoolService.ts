/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import School from '../db/models/school'
import {SchoolInfo} from '../dao/SchoolDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'

export interface SchoolService {
  /**
   *
   * @returns {User}
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<SchoolInfo>>>

  /**
   *
   * @param {string} id
   */
  findById(id: number): Promise<SchoolInfo>

  /**
   *
   * @param {string} schoolId
   */
  findBySchoolId(schoolId: string): Promise<SchoolInfo>

  /**
   *
   * @param {string} schoolName
   * @returns {Promise<Array<School>>}
   */
  findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>>

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: SchoolInfo): Promise<Response<SchoolInfo>>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: SchoolInfo): Promise<Response<SchoolInfo>>
}

