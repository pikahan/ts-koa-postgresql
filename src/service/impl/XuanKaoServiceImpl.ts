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

  delete(id: number) {
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
