require('dotenv').config()
const path = require('path')
const express = require('express')
const db = require('./db')
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')
const app = express()

// express session variables
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);

const x = process.env

// port
const PORT = x.PORT || 3030

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))

// uncomment options variable for localhost
// const options = {
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'dungeon_crawler',
//   multipleStatements: true
// }

// comment out this for localhost
// environment variables stored on heroku
const options = {
  host: x.JAWSDB_HOST,
  user: x.JAWSDB_USER,
  password: x.JAWSDB_PASSWORD,
  database: x.JAWSDB_DATABASE
}

// session store for mysql session
const sessionStore = new MySQLStore(options);

// session cookie, .env variables on heroku
app.use(session({
  // change key and secret to strings for localhost: "x.SESSION_KEY"
  key: x.SESSION_KEY,
  secret: x.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

  .use(db)
  .use(htmlRoutes)
  .use(apiRoutes)
  
  .listen(PORT, () => {
    console.log(`
 ██████╗ ██╗   ██╗███╗   ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗ 
 ██╔══██╗██║   ██║████╗  ██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║ 
 ██║  ██║██║   ██║██╔██╗ ██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║ 
 ██║  ██║██║   ██║██║╚██╗██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║ 
 ██████╔╝╚██████╔╝██║ ╚████║╚██████╔╝███████╗╚██████╔╝██║ ╚████║ 
 ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ 
                        ██████╗██████╗  █████╗ ██╗    ██╗██╗     
  DEVELOPED BY:        ██╔════╝██╔══██╗██╔══██╗██║    ██║██║     
     TONY              ██║     ██████╔╝███████║██║ █╗ ██║██║     
     ERIK              ██║     ██╔══██╗██╔══██║██║███╗██║██║     
     NICK              ╚██████╗██║  ██║██║  ██║╚███╔███╔╝███████╗
                       ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝
 dungeon-crawl.herokuapp.com
                          Server Started on http://localhost:${PORT}`)
  })
