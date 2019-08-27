const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {
  res.render('index', {
    title: 'My Cool App',
    user: 'Nerd'
  })
})

// router.get('/login', (req, res) => {
//   res.send("hello")
//   // const name = req.params.name

// })

module.exports = router
