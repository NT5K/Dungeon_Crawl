const express = require('express');
const passport = require('passport')
const router = express.Router();

//===================================================
  // game level and player stats
//===================================================
// router
// .get('/game/level/:page', authenticationMiddleware(), (req, res) => {

//     console.log(req.user)
//     console.log(req.isAuthenticated())
//     req.connection.query('SELECT * FROM level_questions WHERE id = ?; SELECT * FROM player WHERE id = 1', [req.params.page], (err, data) => {
//       // req.session[nick]

//       const q = data[0][0];
//       const s = data[1][0];

//       // catch any errors
//       if (err) {
//         console.log(err);
//         return res.status(500).send('oops');
//       };

//         res.render('index', {
  
//           //question
//           qId: q.id,
//           question: q.question,
//           choices: q.choices,
//           next_page: q.next_page_paths,
//           current_page: q.current_page_number,
//           background: q.image_path,
  
//           // stats
//           id: s.id,
//           name: s.player_name,
//           health: s.player_health,
//           defence: s.player_defence,
//           gold: s.player_gold,
//           sword_state: s.sword_state,
//           sword_damage: s.sword_damage,
//           cake_state: s.cake_state,
//           torch_state: s.torch_state,
//           createdAt: s.createdAt
  
//         });

//       // })

//     });

//   });

router
  .get('/game/level/:page', authenticationMiddleware(), (req, res) => {

    console.log(req.user)
    console.log(req.isAuthenticated())
    req.connection.query('SELECT * FROM level_questions WHERE id = ?;', [req.params.page], (err, data) => {
      const user = req.session.name
      // res.send(user.player)
      const q = data[0];
      // const s = data[1][0];

      // catch any errors
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      };

      res.render('index', {

        //question
        qId: q.id,
        question: q.question,
        choices: q.choices,
        next_page: q.next_page_paths,
        current_page: q.current_page_number,
        background: q.image_path,

        // stats
        // id: user.id,
        name: user.player_name,
        health: user.player_health,
        defence: user.player_defence,
        gold: user.player_gold,
        sword_state: user.sword_state,
        sword_damage: user.sword_damage,
        cake_state: user.cake_state,
        torch_state: user.torch_state,
        createdAt: user.createdAt

      });

    })

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



router.post("/login", (req, res) => {
  const query = "INSERT INTO player(player_name, player_password, player_health, player_defence, player_gold, sword_state, sword_damage, cake_state, torch_state, torch_damage) VALUES (?, ?, 100, 100, 1000, true, 100, false, false, 50);";
  const body = [req.body.name, req.body.password];
  req.connection.query(query, body, (err, result) => {
    req.connection.query('SELECT LAST_INSERT_ID() as user_id', (error, results, fields) => {
      const user_id = results[0]

      if (error) {
        console.log(error);
        return res.status(500).send('oops');
      };
      // res.json(data[0])
      //login user
      console.log(user_id)
      req.login(user_id, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send('oops');
        };
        res.redirect('/game/level/1')
      })
      
        //render the game
    // return json to display on success page
    })
  });
});

passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});

passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});


function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();
    res.redirect('/')
  }
}



















module.exports = router


