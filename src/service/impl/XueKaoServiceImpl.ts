/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import {XuekaoService} from '../XueKaoService'
import {XuekaoDao, XueKaoInfo, XueKaoViewInfo} from '../../dao/XueKaoDao'
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

  public async create(entity: XueKaoViewInfo) {
    const subjectName = entity.subjectName
    const subject = await this.xueKaoDao.findSubjectIdBySubjectName(subjectName)
    if (!subject) {
      return {
        code: ResponseCode.ERROR,
        message: '没有此学科'
      }
    }
    const res = await this.xueKaoDao.create({
      subjectId: subject.id,
      level: entity.level,
      idNumber: entity.idNumber
    })

    return {
      code: ResponseCode.OK,
      message: 'ok',
      response: res
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.xueKaoDao.delete(id)
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

  public async update(id: number, entity: XueKaoInfo): Promise<Response<XueKaoInfo>> {
    try {
      const data = await this.xueKaoDao.update(id, entity)
      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 名称重复'
      }
    }
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
