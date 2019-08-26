/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {MajorDao, MajorInfo} from '../MajorDao'
import Major from '../../db/models/major'

export class MajorDaoImpl implements MajorDao {
  constructor() {
    dbContext.init()
  }

  create(entity: MajorInfo): Promise<Major> {
    return undefined;
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<Major>> {
    return undefined;
  }

  findByMajorId(majorId: string): Promise<Major> {
    return undefined;
  }

  findByMajorName(majorName: string): Promise<Array<Major>> {
    return undefined;
  }

  findBySchoolId(schoolId: number): Promise<Array<Major>> {
    return undefined;
  }


}