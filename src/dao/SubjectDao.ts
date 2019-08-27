/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Subject from '../db/models/subject'
import {StudentInfo} from './StudentDao'

export interface SubjectDao {
  /**
   *
   * @returns {Subject}
   */
  findAll(): Promise<Array<SubjectInfo>>

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

  update(id: number, entity: SubjectInfo)

}
export interface SubjectInfo {
  id?: string
  subjectId: string
  subjectName: string
}