import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'xuekao_view'
})
export default class XueKaoView extends Model<XueKaoView> {
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
  level: string
}