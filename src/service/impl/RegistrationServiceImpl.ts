
import {RegistrationService} from '../RegistrationService'
import Registration from '../../db/models/registration'
import {RegistrationDao, RegistrationInfo, RegistrationViewInfo} from '../../dao/RegistrationDao'
import {RegistrationDaoImpl} from '../../dao/impl/RegistrationDaoImpl'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {EnrollmentInfo} from '../../dao/EnrollmentDao'
import {MajorInfo, MajorViewInfo} from '../../dao/MajorDao'

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
  public async findAll(queryOption: QueryOption): Promise<Response<Array<RegistrationInfo>>> {
    try {
      const data = await this.registrationDao.findAll(queryOption)
      console.log(data, 'test')
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data,
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
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
  public async create(entity: RegistrationViewInfo) {
    try {
      const { schoolName, ...rest } = entity
      const school = await this.registrationDao.findSchoolIdBySchoolName(schoolName)

      if (!school) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学校名称'
        }
      }

      await this.registrationDao.create({
        schoolId: school.id,
        ...rest
      })

      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 编号重复',
      }
    }  }

  /**
   *
   * @param {number} id
   */
  public async delete(id: number) {
    try {
      const data = await this.registrationDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功',
      }
    } catch (e) {
      console.log(e)
      const eMessage = e.toString()
      const ret = {
        code: ResponseCode.ERROR,
        message: '删除失败'
      }

      return ret
    }
  }

  public async update(id: number, entity: RegistrationViewInfo) {
    try {
      const { schoolName, ...rest } = entity
      const school = await this.registrationDao.findSchoolIdBySchoolName(schoolName)

      console.log('get id ', id)
      if (!school) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学校名称'
        }
      }

      await this.registrationDao.update(id, {
        schoolId: school.id,
        ...rest
      })

      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 编号重复',
      }
    }
  }
}