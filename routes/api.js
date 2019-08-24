const express = require('express')

const router = express.Router()

// const currentURL = window.location.origin;

router
  .get('/game/:level', (req, res) => {

    req.connection.query('SELECT * FROM level_questions WHERE id = ?; SELECT * FROM player WHERE id = ?', [req.params.level, 1], (err, data) => {

          // res.json(data[0])
          res.render('index', {
            //question
            qId: data[0][0].id,
            question: data[0][0].question,
            choices: data[0][0].choices,
            page: data[0][0].page_number,
            background: data[0][0].image_path,
            // stats
            name: data[1][0].player_name,
            health: data[1][0].player_health
          })

      })

    })      


  .put('/subtracthealth', (req, res) => {
  //   req.connection.query('UPDATE player SET player_health = player_health - 10 WHERE id = 1')
  
    const columnQuery = "SELECT * FROM player WHERE id = 1;";

    req.connection.query(columnQuery, (err, res) => {
      // catch any errors
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      };

      //player from first connection.query is the first ?
      const updateQuery = "UPDATE player SET ? WHERE id = 1;";

      // add input to the player row
      const updateHealth = res[0].player_health - 10;

      //object for query
      const updateObject = [
        {
          player_health: updateHealth
        }
      ];

      // second query for adding the input quantity to the table
      req.connection.query(updateQuery, updateObject, (err, data) => {
        // catch any errors
        if (err) {
          console.log(err);
          return res.status(500).send('bfgsder');
        };
        console.log(data);
        // return res.status(200).end();
      });
    });
  })

module.exports = router
