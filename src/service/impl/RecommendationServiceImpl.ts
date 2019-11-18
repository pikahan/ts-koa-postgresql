/*
 * @Description: 数据库表操作基础接口 MajorDao.ts
 */


import Promise from 'sequelize/types/lib/promise'
import {Response, ResponseCode} from '../../util/type'
import {RecommendationService} from '../RecommendationService'
import {RecommendationDao, RecommendationInfo} from '../../dao/RecommendationDao'
import {RecommendationDaoImpl} from '../../dao/impl/RecommendationDaoImpl'

export class RecommendationServiceImpl implements RecommendationService {
  private recommendationDao: RecommendationDao

  constructor() {
    this.recommendationDao = new RecommendationDaoImpl()
  }

  public async create(entity: RecommendationInfo): Promise<Response<RecommendationInfo>> {
    try {


      await this.recommendationDao.create(entity)

      return {
        code: ResponseCode.OK,
        message: '创建成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '创建失败: 编号重复',
      }
    }
  }

  public async update(id: number, entity: RecommendationInfo): Promise<Response<RecommendationInfo>> {
    try {

      await this.recommendationDao.update(id, entity)

      return {
        code: ResponseCode.OK,
        message: '修改成功'
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '修改失败: 名称重复',
      }
    }
  }


  public async findAll(idNumber: string): Promise<Array<RecommendationInfo>> {
    try {

      const deleteInfo = await this.recommendationDao.delete(idNumber)
      const xuekaoInfo = await this.recommendationDao.findXuekaoInfoByIdNumber(idNumber)
      const xuankaoInfo = await this.recommendationDao.findXuankaoInfoByIdNumber(idNumber)

      // 查找今年的招生要求信息
      const year = (new Date).getFullYear()
      const enrollmentRequireInfo = await this.recommendationDao.findEnrollmentRequireInfoByYear(year)

      // 查找去年的招生信息
      const enrollmentInfo = await this.recommendationDao.findEnrollmentInfoByYear(year-1)


      let grade = 0

      for (let i = 0; i < xuankaoInfo.length; i++) {
        grade += xuankaoInfo[i].grade
      }

      // 选考成绩ok的学校以及专业
      let gradeOkInfo = enrollmentInfo.filter(item => {
        return item.grade < grade
      })

      let obj = {}

      enrollmentRequireInfo.forEach(item => {
        const key = item.schoolName + '-' + item.majorName
        if (typeof obj[key] === 'undefined') {
          obj[key] = [{
            subjectName: item.subjectName,
            level: item.otherRequirement
          }]
        } else {
          obj[key].push({
            subjectName: item.subjectName,
            level: item.otherRequirement
          })
        }
      })

      const keys = Object.keys(obj)
      let levelOkInfo = []
      keys.forEach(key => {
        const item = obj[key]
        let flag = 0
        for (let i = 0; i < item.length; i++) {
          const name = item[i].subjectName
          const level = item[i].level
          xuekaoInfo.forEach(xuekaoItem => {
            if (xuekaoItem.subjectName === name && xuekaoItem.level > level) {
              flag = 1
            }
          })
        }
        if (flag === 0) {
          levelOkInfo.push(key)
        }

      })
    console.log(gradeOkInfo)
       //[ '浙江大学-计算机科学', '测试-测试' ]

      const ret = levelOkInfo.map(item => {
        let arr = item.split('-')
        const schoolName = arr[0]
        const majorName = arr[1]

        return {
          key: schoolName + '-' + majorName,
          schoolName,
          majorName,
          reason: '满足学考成绩等级要求'
        }
      })

      gradeOkInfo.forEach(item => {
        let key = item.schoolName + '-' + item.majorName
        console.log(key)
        let flag = 0
        ret.forEach(info => {
          if (info.key === key) {
            info.reason += ', 且成绩超过往年分数线'
            flag = 1
          }
        })

        if (flag === 0) {
          ret.push({
            key: item.schoolName + '-' + item.majorName,
            schoolName: item.schoolName,
            majorName: item.majorName,
            reason: '成绩超过往年分数线'
          })
        }

      })

      console.log(ret)
      //
      //    { id: '3',
      //     schoolName: '浙江大学',
      //     majorName: '计算机科学',
      //     year: 2018,
      //     tuition: '2000',
      //     planNumber: 90,
      //     grade: 222 },
      // { id: '7',
      //     schoolName: '浙江大学',
      //     majorName: '软件工程',
      //     year: 2018,
      //     tuition: '3232',
      //     planNumber: 23,
      //     grade: 200 } ]




      // const data = await this.recommendationDao.findAll()
      return {
        code: ResponseCode.OK,
        message: '查询成功',
        response: ret,
      }
    } catch (e) {
      console.log(e)
      return {
        code: ResponseCode.ERROR,
        message: '失败',
      }
    }
  }


}