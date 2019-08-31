import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'major'
})
export default class Major extends Model<Major> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  majorTypeId: number


  @Column
  schoolId: number
}

