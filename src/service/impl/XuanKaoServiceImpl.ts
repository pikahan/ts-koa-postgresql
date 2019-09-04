/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {XuankaoService} from '../XuanKaoService'
import {XuankaoDao, XuanKaoInfo, XuanKaoViewInfo} from '../../dao/XuanKaoDao'
import {XuanKaoDaoImpl} from '../../dao/impl/XuanKaoDaoImpl'
import XuanKao from '../../db/models/xuankao'
import {Response, ResponseCode} from '../../util/type'
import {QueryOption} from '../../util/help'
import {SubjectInfo} from '../../dao/SubjectDao'

export class XuanKaoServiceImpl implements XuankaoService {
  public async create(entity: XuanKaoViewInfo): Promise<Response<XuanKaoInfo>> {
    const subjectName = entity.subjectName
    const subject = await this.xuanKaoDao.findSubjectIdBySubjectName(subjectName)
    if (!subject) {
      return {
        code: ResponseCode.ERROR,
        message: '没有此学科'
      }
    }
    const res = await this.xuanKaoDao.create({
      subjectId: subject.id,
      grade: entity.grade,
      idNumber: entity.idNumber
    })

    return {
      code: ResponseCode.OK,
      message: 'ok',
      response: res
    }
  }

  public async update(id: number, entity: XuanKaoInfo): Promise<Response<XuanKaoInfo>> {
    try {
      const data = await this.xuanKaoDao.update(id, entity)
      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 名称重复'
      }
    }
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
