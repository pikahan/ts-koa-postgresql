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
      const majorType = await this.majorDao.findByMajorName(entity.majorName)
      const school = await this.majorDao.findBySchoolName(entity.schoolName)

      if (!majorType) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此专业名称'
        }
      }

      if (!school) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学校名称'
        }
      }

      await this.majorDao.create({
        majorTypeId: majorType.id,
        schoolId: school.id
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
      const majorType = await this.majorDao.findByMajorName(entity.majorName)
      const school = await this.majorDao.findBySchoolName(entity.schoolName)

      if (!majorType) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此专业名称'
        }
      }

      console.log('get id ', id)
      if (!school) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学校名称'
        }
      }

      await this.majorDao.update(id, {
        majorTypeId: majorType.id,
        schoolId: school.id
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
      console.log(e)
      const eMessage = e.toString()
      const ret = {
        code: ResponseCode.ERROR,
        message: '删除失败'
      }

      if (eMessage.indexOf('major_school_id_fkey') > -1) {
        ret.message = '请先删除专业中包含此专业信息的记录'
      }


      if (eMessage.indexOf('enrollment_major_id_fkey') > -1) {
        ret.message = '请先删除招生中包含此专业信息的记录'
      }
      return ret
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