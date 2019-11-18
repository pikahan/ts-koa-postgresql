import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'enrollment_require'
})
export default class EnrollmentRequire extends Model<EnrollmentRequire> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  subjectId: number

  @Column
  enrollmentId: string


  @Column
  otherRequirement: string
}

