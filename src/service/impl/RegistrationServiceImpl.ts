
import {RegistrationService} from '../RegistrationService'
import Registration from '../../db/models/registration'
import {RegistrationDao, RegistrationInfo} from '../../dao/RegistrationDao'
import {RegistrationDaoImpl} from '../../dao/impl/RegistrationDaoImpl'

/*
 * @Description: service实现类 UserServiceImpl.ts
 */


export class RegistrationServiceImpl implements RegistrationService {
  private registrationDao: RegistrationDao

  constructor() {
    this.registrationDao = new RegistrationDaoImpl()
  }

  /**
   *
   */
  findAll() {
    return this.registrationDao.findAll()
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<Registration>}
   */
  findById(id: number) {
    return this.registrationDao.findById(id)
  }

  /**
   *
   * @param {RegistrationInfo} registrationInfo
   */
  create(registrationInfo: RegistrationInfo) {
    return this.registrationDao.create(registrationInfo)
  }

  /**
   *
   * @param {number} id
   */
  delete(id: number) {
    return this.registrationDao.delete(id)
  }
}