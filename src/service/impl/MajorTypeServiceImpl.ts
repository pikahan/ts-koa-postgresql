/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Promise from 'sequelize/types/lib/promise'
import {MajorService} from '../MajorService'
import {MajorDao, MajorInfo, MajorViewInfo} from '../../dao/MajorDao'
import {MajorDaoImpl} from '../../dao/impl/MajorDaoImpl'
import Major from '../../db/models/major'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {MajorTypeDao, MajorTypeInfo} from '../../dao/MajorTypeDao'
import {MajorTypeDaoImpl} from '../../dao/impl/MajorTypeDaoImpl'
import {MajorTypeService} from '../MajorTypeService'

export class MajorTypeServiceImpl implements MajorTypeService {
  private majorTypeDao: MajorTypeDao

  constructor() {
    this.majorTypeDao = new MajorTypeDaoImpl()
  }

  public async create(entity: MajorTypeInfo): Promise<Response<MajorTypeInfo>> {
    try {


      await this.majorTypeDao.create(entity)

      return {
        code: ResponseCode.OK,
        message: '创建成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '创建失败: 编号重复',
      }
    }
  }

  public async update(id: number, entity: MajorTypeInfo): Promise<Response<MajorTypeInfo>> {
    try {

      await this.majorTypeDao.update(id, entity)

      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 名称重复',
      }
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.majorTypeDao.delete(id)
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

      if (eMessage.indexOf('major_major_type_id_fkey') > -1) {
        ret.message = '请先删除专业中包含此专业类别的记录'
      }

      return ret
    }
  }

  public async findAll(queryOption: QueryOption): Promise<Array<MajorInfo>> {
    try {
      const data = await this.majorTypeDao.findAll(queryOption)
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


}