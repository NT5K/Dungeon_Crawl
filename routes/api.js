const express = require('express');

const router = express.Router();

//===================================================
  // game level and player stats
//===================================================

router
  .get('/game/level/:page', (req, res) => {

    req.connection.query('SELECT * FROM level_questions WHERE id = ?; SELECT * FROM player WHERE id = ?', [req.params.page, 1], (err, data) => {

      const q = data[0][0];
      const s = data[1][0];

      // catch any errors
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      };

      // res.json(data[0])
      res.render('index', {

        //question
        qId: q.id,
        question: q.question,
        choices: q.choices,
        next_page: q.next_page_paths,
        current_page: q.current_page_number,
        background: q.image_path,

        // stats
        id: s.id,
        name: s.player_name,
        health: s.player_health,
        defence: s.player_defence,
        gold: s.player_gold,
        sword_state: s.sword_state,
        sword_damage: s.sword_damage,
        cake_state: s.cake_state,
        torch_state: s.torch_state,
        createdAt: s.createdAt

      });

    });

  });

//===================================================
  // get complete player stats
//===================================================

router
  .get('/player/stats', (req, res) => {

    req.connection.query('SELECT * FROM player WHERE id = 1;', (err, data) => {
      // const d = data[0]
      res.json(data) 
      // res.render('index', {
      //   id: d.id,
      //   name: d.player_name,
      //   health: d.player_health,
      //   defence: d.player_defence,
      //   gold: d.player_gold,
      //   sword_state: d.sword_state,
      //   sword_damage: d.sword_damage,
      //   cake_state: d.cake_state,
      //   torch_state: d.torch_state,
      //   createdAt: d.createdAt
      // })
    })
  })      
  
//===================================================
  // subtract gold when purchase cake 
//===================================================
//   req.connection.query('UPDATE player SET player_health = player_health - 10 WHERE id = 1')

router
  .put('/gold/subtract', (req, result) => {
  
    const columnQuery = "SELECT * FROM player WHERE id = 1;";

    req.connection.query(columnQuery, (err, res) => {

      // catch any errors
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      };

      //player from first connection.query is the first ?
      const updateQuery = "UPDATE player SET ? WHERE id = 1;";

      // update gold count in player row
      const updateGold = res[0].player_gold - 100;

      //object for query
      const updateObject = [
        {
          player_gold: updateGold
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
        return result.status(200).send('successful subtraction of gold');

      });

    });

  });

//===================================================
// update cake state to true
//===================================================
//   req.connection.query('UPDATE player SET player_health = player_health - 10 WHERE id = 1')

router
  .put('/cake/true', (req, result) => {

    const updateCakeTrue = "UPDATE player SET cake_state = true WHERE id = 1;";

      // second query for adding the input quantity to the table
    req.connection.query(updateCakeTrue, (err, data) => {

      // catch any errors
      if (err) {
        console.log(err);
        return result.status(500).send('error');
      };

      console.log(data);
      return result.status(200).send('successful change of cake state');

    });

  });

router
  .put('/health/subtract', (req, result) => {
  
    const columnQuery = "SELECT * FROM player WHERE id = 1;";

    req.connection.query(columnQuery, (err, res) => {

    // catch any errors
    if (err) {
      console.log(err);
      return res.status(500).send('oops');
    };

    //player from first connection.query is the first ?
    const updateQuery = "UPDATE player SET ? WHERE id = 1;";

    // update gold count in player row
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
        return result.status(200).send('successful loss of health');

      });

    });

  });
















module.exports = router


