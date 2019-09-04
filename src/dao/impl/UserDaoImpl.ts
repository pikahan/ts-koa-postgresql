/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {LoginStatus, RegisterStatus, UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'
import School from '../../db/models/school'
import {StudentInfo} from '../StudentDao'
import Student from '../../db/models/student'


export class UserDaoImpl implements UserDao {

  constructor() {
    dbContext.init()
  }

  /**
   * @name 查询
   * @returns {Promise<Model[]>}
   */
  public async findAll() {
    const results = await User.findAll({
      raw: true,
    })

    return results
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await User.findAll({ raw: true, limit, offset: currPage })
  }

  /**
   *
   * @param {string} username
   * @returns {Promise<Model | null>}
   */
  public async findByUsername(username: string) {
    const results = await User.findOne({
      where: {
        username,
      },
    })
    return results as UserInfo
  }

  /**
   * @name: 新增
   * @param : entity
   * @return : undefined
   */
  public async create(entity: UserInfo) {
    const results = await User.create(entity)
    return results
  }

  /**
   * @name: 删除
   * @param : undefined
   * @return : undefined
   */
  public async delete(id: number) {
    const results = await User.destroy({
      where: {
        id: {
          $eq: id,
        },
      },
    })
    return results
  }

  public async update(id: number , entity: UserInfo) {
    return await User.update( entity, { where: { id } })
  }

  public async findInfoByStudentId(id: number): Promise<StudentInfo> {
    return await Student.findOne({
      raw: true,
      where: {
        id
      }
    })
  }
}