/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {UserDao, UserInfo} from '../UserDao'
import User from '../../db/models/user'

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

  /**
   *
   * @param {string} username
   * @returns {Promise<Model | null>}
   */
  public async findByName(username: string) {
    const results = await User.findOne({
      where: {
        username,
      },
    })
    return results
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
}