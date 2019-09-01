import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'speciality_view'
})
export default class SpecialityView extends Model<SpecialityView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  idNumber: string

  @Column
  name: string

  @Column
  type: string

  @Column
  level: string

  @Column
  description: string

  @Column
  materials: string
}

