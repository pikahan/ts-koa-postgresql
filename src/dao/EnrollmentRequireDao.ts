/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Major from '../db/models/major'

import {QueryOption} from '../util/help'
import {MajorInfo} from './MajorDao'
import {SubjectInfo} from './SubjectDao'
import {EnrollmentInfo} from './EnrollmentDao'
import Subject from '../db/models/subject'

export interface EnrollmentRequireDao {
  /**
   *
   * @returns {Major}
   */
  findAll(queryOption: QueryOption): Promise<Array<EnrollmentRequireViewInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<EnrollmentRequireInfo>>


  findBySubjectName(subjectName: string): Promise<Array<SubjectInfo>>

  /**
   * 创建
   * @param {MajorInfo} entity
   */
  create(entity: EnrollmentRequireInfo): Promise<EnrollmentRequireInfo>

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: EnrollmentRequireInfo): Promise<EnrollmentRequireInfo>

  findEnrollmentIdBySchoolNameAndMajorNameAndYear(schoolName: string, majorName: string, year: number): Promise<EnrollmentInfo>

  findSubjectIdBySubjectName(subjectName: string): Promise<Subject>

}


export interface EnrollmentRequireInfo {
  id?: number
  subjectId: number
  enrollmentId: number
  otherRequirement: string
}

export interface EnrollmentRequireViewInfo {
  id?: number
  majorName: string
  schoolName: string
  year: string
  tuition: string
  otherRequirement: string
  planNumber: number
  subjectName: string
}