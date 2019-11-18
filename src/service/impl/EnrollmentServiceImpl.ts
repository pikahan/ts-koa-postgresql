/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import {QueryOption} from '../../util/help'
import {EnrollmentService} from '../EnrollmentService'
import {EnrollmentDao, EnrollmentInfo, EnrollmentViewInfo} from '../../dao/EnrollmentDao'
import {EnrollmentDaoImpl} from '../../dao/impl/EnrollmentDaoImpl'
import {Response, ResponseCode} from '../../util/type'

export class EnrollmentServiceImpl implements EnrollmentService {
  private enrollmentDao: EnrollmentDao

  constructor() {
    this.enrollmentDao = new EnrollmentDaoImpl()
  }

  public async create(entity: EnrollmentViewInfo): Promise<Response<EnrollmentInfo>> {
    try {
      const {schoolName, majorName, ...rest} = entity
      rest.grade = ~~rest.grade
      const major = await this.enrollmentDao.findByMajorNameAndSchoolName(majorName, schoolName)
      // const subject = await this.enrollmentDao.findBySubjectName(subjectName)


      if (!major) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 该学校没有此专业'
        }
      }

      await this.enrollmentDao.create({
        majorId: major.id,
        // subjectId: subject.id,
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
        message: '创建失败: 已有相同记录',
      }
    }  }

  public async delete(id: number) {
    try {
      const data = await this.enrollmentDao.delete(id)
      return {
        code: ResponseCode.OK,
        message: '删除成功',
      }
    } catch (e) {
      console.log(e)
      const eMessage = e.toString()
      const ret = {
        code: ResponseCode.ERROR,
        message: '删除失败: 请在招生要求中删除相关信息'
      }

      return ret
    }
  }

  public async findAll(queryOption: QueryOption): Promise<Response<Array<EnrollmentInfo>>> {
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

  findByMajorId(majorId: string): Promise<Response<EnrollmentInfo>> {
    return undefined;
  }

  findByMajorName(majorName: string): Promise<Array<EnrollmentInfo>> {
    return undefined;
  }

  findBySchoolId(schoolId: number): Promise<Array<EnrollmentInfo>> {
    return undefined;
  }

  public async update(id: number, entity: EnrollmentViewInfo){
    try {
      const {schoolName, majorName, ...rest} = entity
      const major = await this.enrollmentDao.findByMajorNameAndSchoolName(majorName, schoolName)

      if (!major) {
        return {
          code: ResponseCode.ERROR,
          message: '修改失败: 该学校没有此专业'
        }
      }

      // if (!subject) {
      //   return {
      //     code: ResponseCode.ERROR,
      //     message: '修改失败: 没有此学科'
      //   }
      // }

      await this.enrollmentDao.update(id, {
        majorId: major.id,
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
        message: '创建失败: 编号重复',
      }
    }
  }

}