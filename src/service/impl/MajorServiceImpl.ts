/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Promise from 'sequelize/types/lib/promise'
import {MajorService} from '../MajorService'
import {MajorDao, MajorInfo} from '../../dao/MajorDao'
import {MajorDaoImpl} from '../../dao/impl/MajorDaoImpl'
import Major from '../../db/models/major'

export class MajorServiceImpl implements MajorService {
  private majorDao: MajorDao

  constructor() {
    this.majorDao = new MajorDaoImpl()
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