/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Speciality from '../db/models/speciality'
import {SpecialityInfo} from '../dao/SpecialityDao'

export interface SpecialityService {
  /**
   *
   * @returns {Student}
   */
  findAll(): Promise<Array<Speciality>>

  /**
   * @param {number} id
   */
  findById(id: number): Promise<Speciality>

  /**
   *
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string): Promise<Array<Speciality>>


  /**
   * @name 创建
   * @param {StudentInfo} entity
   */
  create(entity: SpecialityInfo)

  /**
   * @name 查询
   * @param {number} id
   */
  delete(id: number)
}
