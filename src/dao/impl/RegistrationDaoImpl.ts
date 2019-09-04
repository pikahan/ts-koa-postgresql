/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {RegistrationDao, RegistrationInfo} from '../RegistrationDao'
import Registration from '../../db/models/registration'
import {formatDate, queryOption2SequelizeQueryOption} from '../../util/help'
import RegistrationView from '../../db/models/registration_view'
import School from '../../db/models/school'

export class RegistrationDaoImpl implements RegistrationDao {
  constructor() {
    dbContext.init()
  }

  /**
   * @name 查询
   * @returns {Promise<Model[]>}
   */


// { id: '0',
//     schoolName: '浙江大学城市学院',
//     conditions: '无',
//     startTime: 2019-08-26T02:10:41.000Z,
//     endTime: 2019-08-26T02:10:45.000Z } ] 'test'
// { raw: true, where: {} }


public async findAll(queryOption) {
    const option = queryOption2SequelizeQueryOption(queryOption)
    return await RegistrationView.findAll(option).then(res => {
      res.forEach(obj => {
        const dateKeys = Object.keys(obj).filter(key => key.indexOf('Time') > -1)
        dateKeys.forEach(dateKey => {
          console.log(formatDate(obj[dateKey]))
          obj[dateKey] = formatDate(obj[dateKey])
        })
      })
      return res
    })
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await Registration.findAll({ raw: true, limit, offset: currPage })
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

  public async update(id: number , entity: RegistrationInfo) {
    return await Registration.update( entity, { where: { id } })
  }

  public async findSchoolIdBySchoolName(schoolName: string) {
    return await School.findOne({
      raw: true,
      where: {
        schoolName
      }
    })
  }
}