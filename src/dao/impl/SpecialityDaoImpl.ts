/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {SpecialityDao, SpecialityInfo} from '../SpecialityDao'
import Speciality from '../../db/models/speciality'

export class SpecialityDaoImpl implements SpecialityDao {
  constructor() {
    dbContext.init()
  }

  create(entity: SpecialityInfo) {
  }

  delete(id: number) {
  }

  findAll(): Promise<Array<Speciality>> {
    return undefined;
  }

  findById(id: number): Promise<Speciality> {
    return undefined;
  }

  findByIdNumber(idNumber: string): Promise<Array<Speciality>> {
    return undefined;
  }


}