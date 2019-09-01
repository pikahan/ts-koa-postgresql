/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Promise from 'sequelize/types/lib/promise'
import {QueryOption} from '../../util/help'
import {EnrollmentService} from '../EnrollmentService'
import {EnrollmentDao, EnrollmentInfo} from '../../dao/EnrollmentDao'
import {EnrollmentDaoImpl} from '../../dao/impl/EnrollmentDaoImpl'
import {Response, ResponseCode} from '../../util/type'
import {MajorInfo, MajorViewInfo} from '../../dao/MajorDao'

export class EnrollmentServiceImpl implements EnrollmentService {
  private enrollmentDao: EnrollmentDao

  constructor() {
    this.enrollmentDao = new EnrollmentDaoImpl()
  }

  public async create(entity: EnrollmentInfo): Promise<EnrollmentInfo> {
    return await this.enrollmentDao.create(entity)
  }

  public async delete(id: number) {
    return await this.enrollmentDao.delete(id)
  }

  public async findAll(queryOption: QueryOption): Promise<Array<EnrollmentInfo>> {
    try {
      const data = await this.enrollmentDao.findAll(queryOption)
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

  findByMajorId(majorId: string): Promise<EnrollmentInfo> {
    return undefined;
  }

  findByMajorName(majorName: string): Promise<Array<EnrollmentInfo>> {
    return undefined;
  }

  findBySchoolId(schoolId: number): Promise<Array<EnrollmentInfo>> {
    return undefined;
  }

  public async update(id: number, entity: EnrollmentInfo): Promise<Response<EnrollmentInfo>> {
    try {
      // const { id: majorTypeId } = await this.enrollmentDao.findByMajorName(entity.majorName)
      // const { id: schoolId } = await this.enrollmentDao.findBySchoolName(entity.schoolName)
      //
      // if (!majorTypeId) {
      //   return {
      //     code: ResponseCode.ERROR,
      //     message: '修改失败: 没有此专业名称'
      //   }
      // }
      //
      // if (!schoolId) {
      //   return {
      //     code: ResponseCode.ERROR,
      //     message: '修改失败: 没有此学校名称'
      //   }
      // }
      //
      // await this.enrollmentDao.update(id, {
      //   majorTypeId,
      //   schoolId
      // })

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

}