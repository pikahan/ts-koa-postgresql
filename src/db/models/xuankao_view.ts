import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'xuankao_view'
})
export default class XuanKaoView extends Model<XuanKaoView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @Column
  idNumber: string

  @Column
  subjectName: string

  @Column
  grade: number
}