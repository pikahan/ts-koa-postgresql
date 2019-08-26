import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'xuekao'
})
export default class XueKao extends Model<XueKao> {
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
  level: string
}