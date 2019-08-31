import {UserService} from '../UserService'
import {LoginStatus, RegisterStatus, UserDao} from '../../dao/UserDao'
import {UserDaoImpl} from '../../dao/impl/UserDaoImpl'
import {LoginStatusCode, RegisterStatusCode} from '../../util/constant'
import {toMd5} from '../../util/help'

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
    return this.userDao.findByUsername(username)
  }

  /**
   * @name: 新增
   * @param: entity
   * @return: undefined
   */
  public create(username: string, password: string, level: string) {
    return this.userDao.create({username, pwd: toMd5(password), level})
  }

  /**
   * @name 删除
   * @param {String} id
   * @returns {any}
   */
  public delete(id: number) {
    return this.userDao.delete(id)
  }

  public async login(username: string, pwd: string): Promise<LoginStatus> {
    const user = await this.userDao.findByUsername(username)

    const ret: LoginStatus = {
      code: LoginStatusCode.USERNAME_NOT_FOUND,
      message: 'username not found'
    }
    if (!user) {
      return ret
    }

    const pwd2md5 = toMd5(pwd)
    if (pwd2md5 === user.pwd) {
      ret.code = LoginStatusCode.OK
      ret.message = 'login ok'
      ret.response = user
    } else {
      ret.code = LoginStatusCode.WRONG
      ret.message = 'login error'
    }
    return ret
  }

  public async register(username: string, pwd: string): Promise<RegisterStatus> {
    const user = await this.userDao.findByUsername(username)
    const ret: RegisterStatus = {
      code: RegisterStatusCode.REPEATED_USERNAME,
      message: 'repeated username'
    }
    if (user) {
      return ret
    }
    const newUser = await this.userDao.create({
      username,
      pwd
    })

    ret.code = RegisterStatusCode.OK
    ret.message = 'register ok'
    ret.response = newUser
    return ret
  }
  public async update(id: number, username: string, pwd: string, level: string) {
    return await this.userDao.update(id, {
      username,
      pwd: toMd5(pwd),
      level
    })
  }
}