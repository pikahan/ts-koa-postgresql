/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {RegistrationDao, RegistrationInfo} from '../RegistrationDao'
import Registration from '../../db/models/registration'

export class RegistrationDaoImpl implements RegistrationDao {
  constructor() {
    dbContext.init()
  }

  /**
   * @name 查询
   * @returns {Promise<Model[]>}
   */
  public async findAll() {
    const results = await Registration.findAll({
      raw: true,
    })

    return results
  }

  /**
   *
   * @param {string} username
   * @returns {Promise<Model | null>}
   */
  public async findById(id: number) {
    const results = await Registration.findOne({
      where: {
        id,
      },
    })
    return results
  }

  public async findBySchoolId(schoolId: number) {
    const results = await Registration.findAll({
      where: {
        schoolId,
      },
    })
    return results
  }

  /**
   *
   * @param {RegistrationInfo} entity
   * @returns {Promise<Model>}
   */
  public async create(entity: RegistrationInfo) {
    const results = await Registration.create(entity)
    return results
  }

  /**
   *
   * @param {number} id
   * @returns {Promise<number>}
   */
  public async delete(id: number) {
    const results = await Registration.destroy({
      where: {
        id: {
          $eq: id,
        },
      },
    })
    return results
  }
}