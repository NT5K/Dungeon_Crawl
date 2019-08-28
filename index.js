require('dotenv').config()
const path = require('path')
const express = require('express')
const db = require('./db')
const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api')

// const cookieParser = require('cookie-parser')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const app = express()
const PORT = process.env.PORT || 3030

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))

  // .use(cookieParser)
const options = process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'dungeon_crawler',
  multipleStatements: true
}
const sessionStore = new MySQLStore(options);


app.use(session({
  key: 'session_cookie_name',
  secret:'session_cookie_secret',
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


// app.get('/login', (req, res) => {
//   res.send(req.session)
//   const object = {
//     player_name: "John Smith",
//     player_health: 100,
//     player_defence: 25,
//     player_gold: 1000,
//     sword_state: true,
//     sword_damage: 75,
//     cake_state: false,
//     torch_state: false,
//     torch_damage: 125
//   }
//   req.session[object]

// })

// app.get('/api/test/session/:name/:value', (req, res) => {
//   // res.send(req.session)
//   const name = req.params.name
//   const value = req.params.value
//   const object = {
//     player_name: name,
//     player_health: 100,
//     player_defence: 25,
//     player_gold: 1000,
//     sword_state: true,
//     sword_damage: 75,
//     cake_state: false,
//     torch_state: false,
//     torch_damage: 125
//   }
//   req.session[value] = object
//   res.send(req.session)
// })