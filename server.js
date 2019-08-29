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

// port
const PORT = process.env.PORT || 3030

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))

// options for mysql session when local
// const options = {
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'dungeon_crawler',
//   multipleStatements: true
// }

// environment variables stored on heroku
const options = {
  host: process.env.JAWSDB_HOST,
  user: process.env.JAWSDB_USER,
  password: process.env.JAWSDB_PASSWORD,
  database: process.env.JAWSDB_DATABASE
}

// session store for mysql session
const sessionStore = new MySQLStore(options);

// session cookie, .env variables on heroku
app.use(session({
  key: process.env.SESSION_KEY,
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}))

  .use(db)
  .use(htmlRoutes)
  .use(apiRoutes)
  
  .listen(PORT, () => {
    console.log(`
          oOOOOOo
         ,|    oO
        //|     |
        \\\\|     |
          \`-----\`
          Server Started on http://localhost:${PORT}`)
  })
