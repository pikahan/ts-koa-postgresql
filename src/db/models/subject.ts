import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'subject'
})
export default class Subject extends Model<Subject> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  subjectId: number

  @Column
  subjectName: string
}

