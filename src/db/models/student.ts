import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'student'
})
export default class Student extends Model<Student> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  idNumber: string

  @Column
  sex: string

  @Column
  phoneNumber: string

  @Column
  name: string

  @Column
  highSchoolName: string

  @Column
  province: string
}

