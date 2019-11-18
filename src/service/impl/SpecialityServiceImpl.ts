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

  public async create(entity: SpecialityInfo) {
    try {
      const data = await this.specialityDao.create(entity)
      return {
        code: ResponseCode.OK,
        message: '创建成功',
        response: data
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: "创建失败: 编号重复"
      }
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.specialityDao.delete(id)
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