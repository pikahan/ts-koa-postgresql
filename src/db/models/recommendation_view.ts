import { Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName: 'recommendation_view'
})
export default class RecommendationView extends Model<RecommendationView> {
  @Column({
    comment: '自增ID',
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  majorName: string

  @Column
  schoolName: string

  @Column
  reason: string
}

