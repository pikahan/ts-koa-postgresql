/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Promise from 'sequelize/types/lib/promise'
import {QueryOption} from '../../util/help'
import {EnrollmentService} from '../EnrollmentService'
import {EnrollmentDao, EnrollmentInfo} from '../../dao/EnrollmentDao'
import {EnrollmentDaoImpl} from '../../dao/impl/EnrollmentDaoImpl'

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
    return await this.enrollmentDao.findAll(queryOption)
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


}