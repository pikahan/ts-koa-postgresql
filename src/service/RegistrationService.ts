/*
 * @Description: service接口  UserService.ts
 * @version:
 */


import Registration from '../db/models/registration'
import {RegistrationInfo} from '../dao/RegistrationDao'

export interface RegistrationService {
  /**
   *
   */
  findAll(): Promise<Array<Registration>>

  /**
   *
   * @param {string} id
   */
  findById(id: number)

  /**
   *
   * @param {RegistrationInfo} registrationInfo
   */
  create(registrationInfo: RegistrationInfo)

  /**
   *
   * @param {number} id
   */
  delete(id: number)
}