import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'enrollment'
})
export default class Enrollment extends Model<Enrollment> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  majorId: number

  @Column
  subjectId: number

  @Column
  year: string

  @Column
  tuition: number

  @Column
  otherRequirement: string
}

