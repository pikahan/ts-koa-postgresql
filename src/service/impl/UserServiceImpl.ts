import {UserService} from '../UserService'
import {UserDao} from '../../dao/UserDao'
import {UserDaoImpl} from '../../dao/impl/UserDaoImpl'

/*
 * @Description: service实现类 UserServiceImpl.ts
 */


export class UserServiceImpl implements UserService {
  private userDao: UserDao

  constructor() {
    this.userDao = new UserDaoImpl()
  }

  /**
   *
   * @returns {Promise<Array<User>>}
   */
  public findAll() {
    return this.userDao.findAll()
  }

  /**
   * @name 查询
   * @param {string} username
   * @returns {any}
   */
  public findByName(username: string) {
    return this.userDao.findByName(username)
  }

  /**
   * @name: 新增
   * @param: entity
   * @return: undefined
   */
  public create(username: string, password: string, level: number) {
    return this.userDao.create({username, pwd: password, level})
  }

  /**
   * @name 删除
   * @param {String} id
   * @returns {any}
   */
  public delete(id: String) {
    return this.userDao.delete(~~id)
  }
}