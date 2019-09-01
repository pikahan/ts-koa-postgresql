/*
 * @Description: service接口  UserService.ts
 * @version:
 */


import {RegistrationInfo} from '../dao/RegistrationDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'

export interface RegistrationService {
  /**
   *
   */
  findAll(queryOption: QueryOption): Promise<Response<Array<RegistrationInfo>>>

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