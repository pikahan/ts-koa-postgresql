/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import {SchoolDaoImpl} from '../../dao/impl/SchoolDaoImpl'
import {SchoolService} from '../SchoolService'
import {SpecialityService} from '../SpecialityService'
import {SpecialityDao, SpecialityInfo} from '../../dao/SpecialityDao'
import {SpecialityDaoImpl} from '../../dao/impl/SpecialityDaoImpl'
import Speciality from '../../db/models/speciality'

export class SpecialityServiceImpl implements SpecialityService {
  private specialityDao: SpecialityDao

  constructor() {
    this.specialityDao = new SpecialityDaoImpl()
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