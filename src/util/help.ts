import * as crypto from 'crypto'
import {SALT} from './constant'

export const toMd5 = pwd => crypto.createHash('md5').update(`${pwd}:${SALT}`).digest('hex')