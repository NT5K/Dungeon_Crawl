const express = require('express')
const path = require('path');
const router = express.Router()

router.get('/', (_, res) => {
  res.render('startscreen')
})
router.get('/gamewin', (_, res) => {
  res.render('gamewin')
})

module.exports = router
