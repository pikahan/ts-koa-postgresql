// /*
//  * @Description: 数据库表操作基础实现类 UserDaoImpl.ts
//  */
//
// import {dbContext} from '../../db/db'
// import {SchoolDao, SchoolInfo} from '../SchoolDao'
// import School from '../../db/models/school'
//
// export class SchoolDaoImpl implements SchoolDao {
//   constructor() {
//     dbContext.init()
//   }
//
//   /**
//    * @name 查询
//    * @returns {Promise<Model[]>}
//    */
//   public async findAll() {
//     const results = await School.findAll({
//       raw: true,
//     })
//
//     return results
//   }
//
//   /**
//    * @name: 查询
//    * @param : undefined
//    * @return : undefined
//    */
//   public async findByName(username: string) {
//     const results = await School.findOne({
//       where: {
//         username: username,
//       },
//     })
//     return results
//   }
//
//   /**
//    * @name: 新增
//    * @param : entity
//    * @return : undefined
//    */
//   public async create(entity: SchoolInfo) {
//     const results = await School.create(entity)
//     return results
//   }
//
//   /**
//    * @name: 删除
//    * @param : undefined
//    * @return : undefined
//    */
//   public async delete(id: number) {
//     const results = await School.destroy({
//       where: {
//         id: {
//           $eq: id,
//         },
//       },
//     })
//     return results
//   }
// }