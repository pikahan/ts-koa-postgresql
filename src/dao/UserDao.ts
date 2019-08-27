/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import User from '../db/models/user'
import {LoginStatusCode, RegisterStatusCode} from '../util/constant'

export interface UserDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<UserInfo>>

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

}
export interface UserInfo {
  id?: string
  level?: string
  username: string
  pwd: string
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