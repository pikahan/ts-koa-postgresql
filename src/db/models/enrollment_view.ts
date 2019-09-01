import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'enrollment_view'
})
export default class EnrollmentView extends Model<EnrollmentView> {
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
  subjectName: number

  @Column
  year: string

  @Column
  tuition: number

  @Column
  planNumber: number

  @Column
  otherRequirement: string
}

