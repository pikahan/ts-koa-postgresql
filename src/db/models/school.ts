import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'school'
})
export default class School extends Model<School> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  schoolId: number

  @Column
  schoolName: string

  @Column
  province: string

  @Column
  city: string

  @Column
  description: string
}

