/*
 * @Description: service接口  UserService.ts
 * @version:
 */


import {RegistrationInfo} from '../dao/RegistrationDao'
import {QueryOption} from '../util/help'

export interface RegistrationService {
  /**
   *
   */
  findAll(queryOption: QueryOption): Promise<Array<RegistrationInfo>>

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