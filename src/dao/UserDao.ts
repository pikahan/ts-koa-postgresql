/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import User from '../db/models/user'

export interface UserDao {
  /**
   *
   * @returns {User}
   */
  findAll(): Promise<Array<User>>

  /**
   * @name 通过username查询
   * @param {string} username
   */
  findByName(username: string)

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
}
export interface UserInfo {
  id?: string
  username: string
  pwd: string
  level: number
}