import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'major_view'
})
export default class MajorView extends Model<MajorView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  majorId: number

  @Column
  majorName: string

  @Column
  majorType: string

  @Column
  schoolName: string
}

