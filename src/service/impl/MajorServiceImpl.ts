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

export class MajorServiceImpl implements MajorService {
  private majorDao: MajorDao

  constructor() {
    this.majorDao = new MajorDaoImpl()
  }

  public async create(entity: MajorViewInfo): Promise<Response<MajorInfo>> {
    try {
      const { id: majorTypeId } = await this.majorDao.findByMajorName(entity.majorName)
      const { id: schoolId } = await this.majorDao.findBySchoolName(entity.schoolName)

      if (!majorTypeId) {
        return {
          code: ResponseCode.ERROR,
          message: '创建失败: 没有此专业名称'
        }
      }

      if (!schoolId) {
        return {
          code: ResponseCode.ERROR,
          message: '创建失败: 没有此学校名称'
        }
      }

      await this.majorDao.create({
        majorTypeId,
        schoolId
      })

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

  public async update(id: number, entity: MajorViewInfo): Promise<Response<MajorInfo>> {
    try {
      const { id: majorTypeId } = await this.majorDao.findByMajorName(entity.majorName)
      const { id: schoolId } = await this.majorDao.findBySchoolName(entity.schoolName)

      if (!majorTypeId) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此专业名称'
        }
      }

      if (!schoolId) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学校名称'
        }
      }

      await this.majorDao.update(id, {
        majorTypeId,
        schoolId
      })

      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 编号重复',
      }
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.majorDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功',
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '删除失败',
      }
    }
  }

  public async findAll(queryOption: QueryOption): Promise<Array<MajorInfo>> {
    try {
      const data = await this.majorDao.findAll(queryOption)
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data,
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }

  findByMajorId(majorId: string): Promise<MajorInfo> {
    return undefined
  }

  public async findByMajorName(majorName: string): Promise<Array<MajorInfo>> {
    try {
      const data = await this.majorDao.findByMajorName(majorName)
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: data,
      }
    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }

  findBySchoolId(schoolId: number): Promise<Array<MajorInfo>> {
    return undefined
  }


}