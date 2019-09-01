/*
 * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
 */

import {dbContext} from '../../db/db'
import {EnrollmentDao, EnrollmentInfo} from '../EnrollmentDao'
import Enrollment from '../../db/models/enrollment'
import {QueryOption, queryOption2SequelizeQueryOption} from '../../util/help'
import EnrollmentView from '../../db/models/enrollment_view'

export class EnrollmentDaoImpl implements EnrollmentDao {
  constructor() {
    dbContext.init()
  }

  public async create(entity: EnrollmentInfo): Promise<EnrollmentInfo> {
    return await Enrollment.create(entity)
  }

  public async delete(id: number) {
    return await Enrollment.destroy({
      where: {
        id
      }
    })
  }

  public async findAll(queryOption: QueryOption): Promise<Array<EnrollmentInfo>> {
    return await EnrollmentView.findAll(queryOption2SequelizeQueryOption(queryOption));
  }

  public async findAllWithLimitation(currPage: number, limit: number) {
    return await Enrollment.findAll({ raw: true, limit, offset: currPage })
  }

  public async findByMajorId(majorId: string) {
    return await Enrollment.findAll({ raw: true });
  }

  public async update(id: number , entity: EnrollmentInfo) {
    return await Enrollment.update( entity, { where: { id } })
  }

}