/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {XuankaoService} from '../XuanKaoService'
import {XuankaoDao, XuanKaoInfo} from '../../dao/XuanKaoDao'
import {XuanKaoDaoImpl} from '../../dao/impl/XuanKaoDaoImpl'
import XuanKao from '../../db/models/xuankao'
import {Response, ResponseCode} from '../../util/type'
import {QueryOption} from '../../util/help'

export class XuanKaoServiceImpl implements XuankaoService {
  create(entity: XuanKaoInfo) {
  }

  public async delete(id: number) {
    try {
      const data = await this.xuanKaoDao.delete(id)
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

      if (eMessage.indexOf('major_school_id_fkey') > -1) {
        ret.message = '请先删除专业中包含此学校信息的记录'
      }


      if (eMessage.indexOf('enrollment_major_id_fkey') > -1) {
        ret.message = '请先删除招生中包含此专业信息的记录'
      }
      return ret
    }
  }

  public async findAll(queryOption: QueryOption): Promise<Response<Array<XuanKaoInfo>>> {
    try {
      const data = await this.xuanKaoDao.findAll(queryOption)
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

  findByIdNumber(idNumber: string) {
  }
  private xuanKaoDao: XuankaoDao

  constructor() {
    this.xuanKaoDao = new XuanKaoDaoImpl()
  }

}
