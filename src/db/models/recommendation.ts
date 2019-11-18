import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'recommendation'
})
export default class Recommendation extends Model<Recommendation> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  idNumber: string

  @Column
  majorId: number

  @Column
  reason: string
}

