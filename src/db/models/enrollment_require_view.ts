import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'enrollment_require_view'
})
export default class EnrollmentRequireView extends Model<EnrollmentRequireView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  schoolName: string

  @Column
  majorName: number

  @Column
  year: string

  @Column
  tuition: number

  @Column
  planNumber: number

  @Column
  otherRequirement: string

  @Column
  subjectName: string
}

