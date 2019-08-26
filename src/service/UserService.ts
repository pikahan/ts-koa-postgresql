/*
 * @Description: service接口  UserService.ts
 * @version:
 */


import User from '../db/models/user'

export interface UserService {
  /**
   *
   */
  findAll(): Promise<Array<User>>

  /**
   *
   * @param {string} username
   */
  findByName(username: string)

  /**
   *
   * @param {string} username
   * @param {string} password
   * @param {string} level
   */
  create(username: string, password: string, level: number)

  /**
   *
   * @param {String} id
   */
  delete(id: String)
}