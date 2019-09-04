/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import User from '../db/models/user'
import {LoginStatusCode, RegisterStatusCode} from '../util/constant'
import {SchoolInfo} from './SchoolDao'
import {StudentInfo} from './StudentDao'

export interface UserDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<UserInfo>>


  findAllWithLimitation(currPage: number, limit: number): Promise<Array<UserInfo>>

  /**
   * @name 通过username查询
   * @param {string} username
   */
  findByUsername(username: string): Promise<UserInfo>

  /**
   * 创建
   * @param {UserInfo} entity
   */
  create(entity: UserInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)

  update(id: number, entity: UserInfo): Promise<UserInfo>


  findInfoByStudentId(id: number): Promise<StudentInfo>
}
export interface UserInfo {
  id?: string
  level?: string
  username: string
  pwd: string
  studentId?: number
}


export interface RegisterStatus {
  code: RegisterStatusCode
  message: string
  response?: UserInfo
}

export interface LoginStatus {
  code: LoginStatusCode
  message: string
  response?: UserInfo
}