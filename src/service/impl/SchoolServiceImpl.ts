/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */

import {SchoolService} from '../SchoolService'
import {SchoolDaoImpl} from '../../dao/impl/SchoolDaoImpl'
import {SchoolDao, SchoolInfo} from '../../dao/SchoolDao'
import School from '../../db/models/school'
import {Response, ResponseCode} from '../../util/type'

export class SchoolServiceImpl implements SchoolService {

  private schoolDao: SchoolDao

  constructor() {
    this.schoolDao = new SchoolDaoImpl()
  }

  public async create(entity: SchoolInfo): Promise<Response<SchoolInfo>> {
    try {
      const data = await this.schoolDao.create(entity)
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

  public async update(id: number, entity: SchoolInfo): Promise<Response<SchoolInfo>> {
    try {
      const data = await this.schoolDao.update(id, entity)
      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 编号重复'
      }
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.schoolDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功'
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '删除失败'
      }
    }
  }

  public async findAll(queryOption): Promise<Response<Array<SchoolInfo>>> {
    try {
      const data = await this.schoolDao.findAll(queryOption)
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

  findById(id: number): Promise<School> {
    return undefined;
  }

  findBySchoolId(schoolId: string): Promise<School> {
    return undefined;
  }

  public async findBySchoolName(schoolName: string): Promise<Array<SchoolInfo>> {
    return await this.schoolDao.findBySchoolName(schoolName)
  }

}