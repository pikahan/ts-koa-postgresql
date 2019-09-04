/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import XueKao from '../db/models/xuekao'
import {XuanKaoInfo} from './XuanKaoDao'
import {SchoolInfo} from './SchoolDao'
import {QueryOption} from '../util/help'
import {SubjectInfo} from './SubjectDao'
import Subject from '../db/models/subject'

export interface XuekaoDao {
  /**
   *
   * @returns {XueKao}
   */
  findAll(queryOption: QueryOption): Promise<Array<XueKaoInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<XueKaoInfo>>

  /**
   * @name 通过身份证查询
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string)

  findById(id: number)

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: XueKaoInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: XueKaoInfo): Promise<XueKaoInfo>

  findSubjectIdBySubjectName(subjectName: string): Promise<SubjectInfo>

}
export interface XueKaoInfo {
  id?: string
  idNumber: string
  subjectId: string
  level: string
}

export interface XueKaoViewInfo {
  id?: string
  idNumber: string
  subjectName: string
  level: string
}