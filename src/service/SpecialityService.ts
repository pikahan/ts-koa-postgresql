/*
 * @Description: 数据库表操作基础接口 UserDao.ts
 */
import Speciality from '../db/models/speciality'
import {SpecialityInfo} from '../dao/SpecialityDao'
import {Response} from '../util/type'
import {StudentInfo} from '../dao/StudentDao'

export interface SpecialityService {
  /**
   *
   * @returns {Student}
   */
  findAll(queryOption): Promise<Response<Array<SpecialityInfo>>>

  /**
   * @param {number} id
   */
  findById(id: number): Promise<SpecialityInfo>

  /**
   *
   * @param {string} idNumber
   */
  findByIdNumber(idNumber: string): Promise<Array<SpecialityInfo>>


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
