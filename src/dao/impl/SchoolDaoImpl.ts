/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {SchoolDao, SchoolInfo} from '../SchoolDao'
import School from '../../db/models/school'

export class SchoolDaoImpl implements SchoolDao {
  constructor() {
    dbContext.init()
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