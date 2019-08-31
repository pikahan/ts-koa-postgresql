/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Subject from '../db/models/subject'
import {SpecialityService} from './SpecialityService'
import {SubjectInfo} from '../dao/SubjectDao'
import {QueryOption} from '../util/help'

export interface SubjectService {
  /**
   *
   * @returns {Subject}
   */
  findAll(queryOption: QueryOption): Promise<Array<SubjectInfo>>

  /**
   * @param {string} subjectId
   */
  findById(subjectId: number)

  /**
   *
   * @param {string} subjectName
   */
  findBySubjectName(subjectName: string)

  /**
   * @name 创建
   * @param {SubjectInfo} entity
   */
  create(entity: SubjectInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
