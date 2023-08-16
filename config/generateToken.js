import jwt from 'jsonwebtoken'
import config from './config.js'

const generateAccessToken = (id) => {
   const payload = {
      id,
      // roles
   }
   return jwt.sign(payload, config.secret, { expiresIn: "2400h" })
}

export default generateAccessToken
