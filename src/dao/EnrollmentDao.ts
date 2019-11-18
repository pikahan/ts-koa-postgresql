/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'
import Promise from 'sequelize/types/lib/promise'
import {UserInfo} from './UserDao'
import {SchoolInfo} from './SchoolDao'
import {QueryOption} from '../util/help'
import {MajorInfo} from './MajorDao'
import {SubjectInfo} from './SubjectDao'

export interface EnrollmentDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<EnrollmentInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<EnrollmentInfo>>


  findBySubjectName(subjectName: string): Promise<Array<SubjectInfo>>

  findByMajorNameAndSchoolName(majorName: string, schoolName: string): Promise<Array<MajorInfo>>

  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: EnrollmentInfo): Promise<EnrollmentInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: EnrollmentInfo): Promise<EnrollmentInfo>

}
export interface EnrollmentInfo {
  id?: number
  majorId: string
  year: string
  tuition: string
  grade: number
}

export interface EnrollmentViewInfo {
  id?: number
  majorName: string
  schoolName: string
  year: string
  tuition: string
  grade: number
}