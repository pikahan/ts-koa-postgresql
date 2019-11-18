import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'registration'
})
export default class Registration extends Model<Registration> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  schoolId: number

  @Column
  registrationWay: string

  @Column
  conditions: string

  @Column
  startTime: Date

  @Column
  endTime: Date
}

