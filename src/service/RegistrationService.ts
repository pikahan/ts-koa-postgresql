/*
 * @Description: service接口  UserService.ts
 * @version:
 */


import {RegistrationInfo, RegistrationViewInfo} from '../dao/RegistrationDao'
import {QueryOption} from '../util/help'
import {Response} from '../util/type'
import {MajorTypeInfo} from '../dao/MajorTypeDao'

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
  create(entity: RegistrationViewInfo)

  /**
   *
   * @param {number} id
   */
  delete(id: number)

  update(id, entity: RegistrationViewInfo)

}