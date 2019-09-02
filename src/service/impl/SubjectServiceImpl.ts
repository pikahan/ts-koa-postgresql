/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */

import {SubjectService} from '../SubjectService'
import {SubjectDao, SubjectInfo} from '../../dao/SubjectDao'
import {SubjectDaoImpl} from '../../dao/impl/SubjectDaoImpl'
import Subject from '../../db/models/subject'
import {QueryOption} from '../../util/help'
import {Response, ResponseCode} from '../../util/type'
import {SchoolInfo} from '../../dao/SchoolDao'

export class SubjectServiceImpl implements SubjectService {
  private subjectDao: SubjectDao

  constructor() {
    this.subjectDao = new SubjectDaoImpl()
  }

  create(entity: SubjectInfo) {
  }

  public async delete(id: number) {
    try {
      const data = await this.subjectDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功'
      }
    } catch (e) {
      console.log(e)
      const eMessage = e.toString()
      const ret = {
        code: ResponseCode.ERROR,
        message: '删除失败'
      }

      if (eMessage.indexOf('enrollment_subject_id_fkey') > -1) {
        ret.message = '请先删除招生中包含此科目信息的记录'
      }

      if (eMessage.indexOf('xuekao_subject_id_fkey') > -1) {
        ret.message = '请先删除学考中包含此科目信息的记录'
      }

      if (eMessage.indexOf('xuankao_subject_id_fkey') > -1) {
        ret.message = '请先删除选考中包含此科目信息的记录'
      }

      return ret
    }
  }
  public async findAll(queryOption): Promise<Response<Array<SubjectInfo>>> {
    try {
      const data = await this.subjectDao.findAll(queryOption)
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }

  findById(subjectId: number) {
  }

  findBySubjectName(subjectName: string) {
  }

}
