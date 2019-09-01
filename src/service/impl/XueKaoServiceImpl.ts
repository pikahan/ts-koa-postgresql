/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import {XuekaoService} from '../XueKaoService'
import {XuekaoDao, XueKaoInfo} from '../../dao/XueKaoDao'
import {XueKaoDaoImpl} from '../../dao/impl/XueKaoDaoImpl'
import XueKao from '../../db/models/xuekao'
import {Response, ResponseCode} from '../../util/type'
import {QueryOption} from '../../util/help'
import {XuanKaoInfo} from '../../dao/XuanKaoDao'

export class XueKaoServiceImpl implements XuekaoService {
  private xueKaoDao: XuekaoDao

  constructor() {
    this.xueKaoDao = new XueKaoDaoImpl()
  }

  create(entity: XueKaoInfo) {
  }

  delete(id: number) {
  }

  public async findAll(queryOption: QueryOption): Promise<Response<Array<XueKaoInfo>>> {
    try {
      const data = await this.xueKaoDao.findAll(queryOption)
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
}
