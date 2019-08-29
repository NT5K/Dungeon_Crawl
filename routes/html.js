const express = require('express')
const path = require('path');
const router = express.Router()

// start screen
router.get('/', (_, res) => {
  res.render('startscreen')
})

// win page
router.get('/gamewin', (_, res) => {
  res.render('gamewin')
})

module.exports = router
