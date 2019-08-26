/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Subject from '../db/models/subject'

export interface SubjectDao {
  /**
   *
   * @returns {Subject}
   */
  findAll(): Promise<Array<Subject>>

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
export interface SubjectInfo {
  id: string
  subjectId: string
  subjectName: string
}