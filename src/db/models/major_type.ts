import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'major_type'
})
export default class MajorType extends Model<MajorType> {
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

}

