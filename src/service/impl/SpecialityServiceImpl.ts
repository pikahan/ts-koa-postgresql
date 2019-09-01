/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {SpecialityService} from '../SpecialityService'
import {SpecialityDao, SpecialityInfo} from '../../dao/SpecialityDao'
import {SpecialityDaoImpl} from '../../dao/impl/SpecialityDaoImpl'
import Speciality from '../../db/models/speciality'
import {Response, ResponseCode} from '../../util/type'
import {SchoolInfo} from '../../dao/SchoolDao'

export class SpecialityServiceImpl implements SpecialityService {
  private specialityDao: SpecialityDao

  constructor() {
    this.specialityDao = new SpecialityDaoImpl()
  }

  create(entity: SpecialityInfo) {
  }

  delete(id: number) {
  }

  public async findAll(queryOption): Promise<Response<Array<SpecialityInfo>>> {
    try {
      const data = await this.specialityDao.findAll(queryOption)
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }

  findById(id: number): Promise<SpecialityInfo> {
    return undefined;
  }

  findByIdNumber(idNumber: string): Promise<Array<SpecialityInfo>> {
    return undefined;
  }
}