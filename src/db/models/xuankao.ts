import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'xuankao'
})
export default class XuanKao extends Model<XuanKao> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  idNumber: string

  @Column
  subjectId: number

  @Column
  grade: number
}