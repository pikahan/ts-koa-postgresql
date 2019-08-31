import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'major_type'
})
export default class Major_type extends Model<Major_type> {
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

