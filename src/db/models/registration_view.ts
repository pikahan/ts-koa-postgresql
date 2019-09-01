import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'registration_view'
})
export default class RegistrationView extends Model<RegistrationView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  schoolName: string

  @Column
  conditions: string

  @Column
  startTime: Date

  @Column
  endTime: Date
}

