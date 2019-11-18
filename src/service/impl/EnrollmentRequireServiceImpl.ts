/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import {QueryOption} from '../../util/help'
import {EnrollmentService} from '../EnrollmentService'
import {EnrollmentDao, EnrollmentInfo, EnrollmentViewInfo} from '../../dao/EnrollmentDao'
import {Response, ResponseCode} from '../../util/type'
import {EnrollmentRequireService} from '../EnrollmentRequireService'
import {EnrollmentRequireDao, EnrollmentRequireInfo, EnrollmentRequireViewInfo} from '../../dao/EnrollmentRequireDao'
import {EnrollmentRequireDaoImpl} from '../../dao/impl/EnrollmentRequireDao'

export class EnrollmentServiceRequireImpl implements EnrollmentRequireService {
  findByMajorId(majorId: string): Promise<EnrollmentRequireInfo> {
    return undefined;
  }
  private enrollmentRequireDao: EnrollmentRequireDao

  constructor() {
    this.enrollmentRequireDao = new EnrollmentRequireDaoImpl()
  }

  public async create(entity: EnrollmentRequireViewInfo): Promise<Response<EnrollmentRequireViewInfo>> {
    try {
      const {schoolName, majorName, year, subjectName, ...rest} = entity
      const enrollment = await this.enrollmentRequireDao.findEnrollmentIdBySchoolNameAndMajorNameAndYear(schoolName, majorName, ~~year)
      const subject = await this.enrollmentRequireDao.findSubjectIdBySubjectName(subjectName)
      if (!enrollment) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此招生信息'
        }
      }

      if (!subject) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学科'
        }
      }
      const ret = await this.enrollmentRequireDao.create({
        enrollmentId: ~~enrollment.id,
        subjectId: ~~subject.id,
        ...rest
      })
      return {
        code: ResponseCode.OK,
        message: '创建成功'
      }

    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '创建失败: 编号重复'
      }
    }
  }

  public async delete(id: number) {
    try {
      const data = await this.enrollmentRequireDao.delete(id)
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

  public async findAll(queryOption: QueryOption): Promise<Response<Array<EnrollmentRequireViewInfo>>> {
    try {
      const data = await this.enrollmentRequireDao.findAll(queryOption)
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

  // findByMajorId(majorId: string): Promise<Response<EnrollmentRequireViewInfo>> {
  //   return undefined;
  // }

  findByMajorName(majorName: string): Promise<Array<EnrollmentInfo>> {
    return undefined;
  }

  findBySchoolId(schoolId: number): Promise<Array<EnrollmentRequireInfo>> {
    return undefined;
  }

  public async update(id: number, entity: EnrollmentRequireViewInfo){
    try {

      const {schoolName, majorName, year, subjectName, ...rest} = entity
      const enrollment = await this.enrollmentRequireDao.findEnrollmentIdBySchoolNameAndMajorNameAndYear(schoolName, majorName, ~~year)
      const subject = await this.enrollmentRequireDao.findSubjectIdBySubjectName(subjectName)
      if (!enrollment) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此招生信息'
        }
      }

      if (!subject) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 没有此学科'
        }
      }
      const ret = await this.enrollmentRequireDao.update(id, {
        enrollmentId: ~~enrollment.id,
        subjectId: ~~subject.id,
        ...rest
      })
      return {
        code: ResponseCode.OK,
        message: '创建成功'
      }

    } catch (e) {
      return {
        code: ResponseCode.ERROR,
        message: '创建失败: 编号重复'
      }
    }

      // if (!subject) {
      //   return {
      //     code: ResponseCode.ERROR,
      //     message: '修改失败: 没有此学科'
      //   }
      // }




    // } catch (e) {
    //   console.log(e)
    //   return {
    //     code: ResponseCode.ERROR,
    //     message: '创建失败: 编号重复',
    //   }
    // }
  }

}