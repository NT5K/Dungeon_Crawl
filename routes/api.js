const express = require('express')

const router = express.Router()

router
  .get('/:level', (req, res) => {

    req.connection.query('SELECT * FROM level_questions WHERE id = ?; SELECT * FROM player WHERE id = ?', [req.params.level, 1], (err, data) => {
        
          // display json so can grab data using ajax
          // return res.json(question[1][0].id)
          // res.json(question[0])
          // res.json(stats[0])
   
         
          res.render('index', {
            //question
            question: data[0][0].question,
            choices: data[0][0].choices,
            qId: data[0][0].id,
            // stats
            name: data[1][0].player_name,
            health: data[1][0].player_health
          })
        
        
      })
    })           

module.exports = router
