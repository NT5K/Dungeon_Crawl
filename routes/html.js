const express = require('express')
const path = require('path')
const router = express.Router()

// start screen
router.get('/', (_, res) => {
  res.render('startscreen')
})

// win page
router.get('/game_win', (_, res) => {
  res.render('gamewin')
})

// you spent all your gold
router.get('/your_broke', (_, res) => {
  res.render('gameover', {
    type_of_loss: "You have spent all of your gold!"
  })
})

// you lost all of your health
router.get('/you_died', (_, res) => {
  res.render('gameover', {
    type_of_loss: "You have lost all of your health!"
  })
})

// error page
router.get('/error', (_, res) => {
  res.render('error')
})

module.exports = router
