var express = require('express')
var router = express.Router()

var gravatar = require('gravatar-api')
var db = null
var database = require('../utils/database')

var hash = require('../utils/hash')
router.use(async (req, res, next) => {
  if (db == null) {
    db = await database.loadDatabase()
  }

  next()
})

router.get('/api/ping', (req, res) => {
  res.end('pong!')
})

router.post('/api/register', async (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.redirect(`/register?err=${encodeURIComponent('You did not put the required values.')}`)
  }

  var accounts = await db.collection('accounts').find({
    username: req.body.username.toLowerCase()
  }).toArray()

  if (!accounts[0]) {
    var accounts = await db.collection('accounts').find({
      email: req.body.email
    }).toArray()

    if (accounts[0]) {
      return res.redirect(`/register?err=${encodeURIComponent('This email is already in used.')}`)
    }
  } else {
    return res.redirect(`/register?err=${encodeURIComponent('This username is already being used.')}`)
  }

  var data = {
    displayUsername: req.body.username,
    username: req.body.username.toLowerCase(),
    password: await hash.encryptKey(req.body.password),
    information: {
      'full_name': req.body['full_name'] || req.body.username,
      'dob': null
    },
    bio: ``,
    createdAt: new Date().toString(),
    avatar: gravatar.imageUrl({
      email: req.body.email
    }),
    email: req.body.email,

    // TODO add website admin stuff
    isWebsiteAdmin: false,
    id: await hash.generateHash()
  }

  await db.collection('accounts').insertOne(data)
  
  var cookie = new Buffer.from(JSON.stringify({
    accountID: data.id,
    sessionDetails: {
      createdAt: new Date().toString()
    }
  }), 'utf-8').toString('base64')

  res.cookie(`_foodify_account_auth`, cookie, {
    signed: true
  })

  res.redirect('/')
})

router.post('/api/login', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.redirect(`/login?err=${encodeURIComponent('You did not put the required values.')}`)
  }

  var accounts = await db.collection('accounts').find({
    username: req.body.username.toLowerCase()
  }).toArray()

  if (!accounts[0]) {
    var accounts = await db.collection('accounts').find({
      email: req.body.username.toLowerCase()
    }).toArray()
  }

  if (!accounts[0]) {
    return res.redirect(`/login?err=${encodeURIComponent('The requested account could not be found.')}`)
  }

  // account does exist

  var account = accounts[0]

  var cookie = new Buffer.from(JSON.stringify({
    accountID: account.id,
    sessionDetails: {
      createdAt: new Date().toString()
    }
  }), 'utf-8').toString('base64')

  res.cookie(`_foodify_account_auth`, cookie, {
    signed: true
  })
})

router.get('/api/logout', (req, res)=>{
  res.clearCookie(`_foodify_account_auth`)

  res.redirect('/')
})

module.exports = router