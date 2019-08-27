const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {
  res.render('login')
})
router.get('/success', (_, res) => {
  res.render('success')
})
router.get('api/test/session', (req, res) => {
  res.send('hello')
})

module.exports = router
