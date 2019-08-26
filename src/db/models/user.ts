import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'user'
})
export default class User extends Model<User> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  username: string

  @Column
  pwd: string

  @Column
  level: string
}