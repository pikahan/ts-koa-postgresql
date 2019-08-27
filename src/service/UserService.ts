/*
 * @Description: service接口  UserService.ts
 * @version:
 */

import {LoginStatus, RegisterStatus, UserInfo} from '../dao/UserDao'

export interface UserService {
  /**
   *
   */
  findAll(): Promise<Array<UserInfo>>

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
  create(username: string, password: string, level: string)

  /**
   *
   * @param {String} id
   */
  delete(id: String)

  update(id: number, username: string, pwd: string, level: string)

  register(username: string, pwd: string): Promise<RegisterStatus>

  login(username: string, pwd: string): Promise<LoginStatus>
}