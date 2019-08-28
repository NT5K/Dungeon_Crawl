const express = require('express')
const path = require('path');
const router = express.Router()

// router.get('/', (_, res) => {
//   res.render('index', {
//     title: 'My Cool App',
//     user: 'Nerd'
//   })
// })
router.get('/', (_, res) => {
  res.render('startscreen')
})

module.exports = router
