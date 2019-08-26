/*
 * @Description: 数据库表操作基础接口 SchoolDao.ts
 */


import {MajorDaoImpl} from '../../dao/impl/MajorDaoImpl'
import {MajorService} from '../MajorService'
import {MajorDao, MajorInfo} from '../../dao/MajorDao'
import Major from '../../db/models/major'
import {SchoolService} from '../SchoolService'
import {SchoolDaoImpl} from '../../dao/impl/SchoolDaoImpl'
import {SchoolDao, SchoolInfo} from '../../dao/SchoolDao'
import School from '../../db/models/school'

export class SchoolServiceImpl implements SchoolService {
  private schoolDao: SchoolDao

  constructor() {
    this.schoolDao = new SchoolDaoImpl()
  }

  create(entity: SchoolInfo): Promise<School> {
    return undefined;
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<School>> {
    return undefined;
  }

  findById(id: number): Promise<School> {
    return undefined;
  }

  findBySchoolId(schoolId: string): Promise<School> {
    return undefined;
  }

  findBySchoolName(schoolName: string): Promise<Array<School>> {
    return undefined;
  }



}