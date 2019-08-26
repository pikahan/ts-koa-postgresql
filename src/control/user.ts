import User from '../db/models/user'

export default {
  async queryUserAll() {
    try {
      return await User.findAll()
    } catch (e) {
      console.log(e)
    }
  },
  async queryUser(username: any) {
    try {
      return await User.findOne({
        where: {
          username
        }
      })
    } catch (e) {
      console.log(e)
      return null
    }
  }
}