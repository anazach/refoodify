require('dotenv').config()
const express = require('express');
const reactViews = require('express-react-views');
const database = require("./utils/database")

var apiRoute = require('./routes/api')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

const app = express();

app.use(cookieParser(process.env.COOKIE_PASSWORD))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(apiRoute)

app.get('/', (req, res) => {
  if(req.signedCookies['_foodify_account_auth']){
    return res.render('feed')
  }

	res.render('login');
})

app.get('/login', (req, res)=>{
  if(req.signedCookies['_foodify_account_auth']){
    return res.redirect('/')
  }

  res.render('login');
})


// testing purposes
app.get('/test', (req, res)=>{
  res.cookie(`_foodify_account_auth`, `test`)

  res.redirect('/')
})

app.get('/register', (req, res)=>{
  // if(res.signedCookies['_foodify_account_auth']){
  //   return res.redirect('/')
  // }

  res.render('register')
})

app.listen(() => console.log(`server is up!`));