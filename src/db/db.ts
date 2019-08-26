/*
 * @Description: 数据库连接类
 */

import * as path from 'path'
import { Sequelize } from 'sequelize-typescript'
import { dbConfig } from '../config/db.config'

class DbContext {
  private sequelize: Sequelize
  constructor() {
    const { host, database, dialect, username, password } = dbConfig
    this.sequelize = new Sequelize({
      host,
      database,
      dialect,
      username,
      password,
      define: {
        timestamps: false,  //开启时间戳 create_at delete_at update_at
        paranoid: true,    //开启假删除
        underscored: true, //下划线
        charset: 'utf8',
        freezeTableName: true //固定表名为单数  默认表名是xxxs
      },
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      timezone: '+08:00',
      modelPaths: [path.resolve(__dirname, `./models`)]
    } as any)
    this.sequelize.sync()
  }
  init(): Boolean {
    return !!this.sequelize
  }
  getInstance(): Sequelize {
    return this.sequelize
  }
  isInit(): Boolean {
    return !!this.sequelize
  }
}
export const dbContext = new DbContext()