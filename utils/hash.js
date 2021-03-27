const bcrypt = require('bcrypt')
var crypto = require('crypto')

const saltRounds = 35

async function generateHash(key = new Date().getTime().toString()) {
  return crypto.createHmac('sha1', new Date().getTime().toString())
    .update(key)
    .digest('hex')
}

// used for encryption imporant things like token
async function encryptKey(key) {
  var salt = bcrypt.genSaltSync()

  return bcrypt.hashSync(key, salt)
}


module.exports = {
  generateHash: generateHash,
  encryptKey: encryptKey
}