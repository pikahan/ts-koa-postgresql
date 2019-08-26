import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'speciality'
})
export default class Speciality extends Model<Speciality> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  idNumber: string

  @Column
  type: string

  @Column
  level: string

  @Column
  description: string

  @Column
  materials: string
}

