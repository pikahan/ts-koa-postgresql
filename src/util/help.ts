import * as crypto from 'crypto'
import {SALT} from './constant'
import {Op} from 'sequelize'

export interface QueryOption {
  exactQueryAttr?: any
  fuzzyQueryAttr?: any
  limitOption?: LimitOption
}

interface SequelizeQueryOption {
  where?: any
  raw?: boolean
}

interface LimitOption {
  offset: number
  limit: number
}

export const toMd5 = pwd => crypto.createHash('md5').update(`${pwd}:${SALT}`).digest('hex')

export const toPureObj = (obj: Object) => {
  const ret = {}
  const keys = Object.keys(obj)
  keys.forEach(key => {
    if (typeof obj[key] === 'undefined' || obj[key] === null) {
      return
    }
    ret[key] = obj[key]
  })
  return ret
}

export const queryOption2SequelizeQueryOption = (obj: QueryOption) => {
  let ret: SequelizeQueryOption = {
    raw: true
  }
  if (typeof obj.exactQueryAttr !== 'undefined') {
    ret.where = {...obj.exactQueryAttr}
  }

  if (typeof obj.fuzzyQueryAttr !== 'undefined') {
    ret.where = {...ret.where, ...mapFuzzyAttr(obj.fuzzyQueryAttr)}
  }

  if (typeof obj.limitOption !== 'undefined') {
    ret = {...ret, ...obj.limitOption}
  }
  return ret
}

const mapFuzzyAttr = fuzzyAttr => {
  const keys = Object.keys(fuzzyAttr)
  const ret = {}
  keys.forEach(key => {
    ret[key] = {
      [Op.like]: `%${fuzzyAttr[key]}%`
    }
  })
  return ret
}

export const formatDate = (dateObj: Date) => {
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()
  return `${year}-${month}-${date}`
}