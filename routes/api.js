
const express = require('express');

const router = express.Router();

//===================================================
  // game level and player stats
//===================================================
router
  .get('/game/level/:page', (req, res) => {

    // if gold or health are zero or below, redirect to the game over screen
    if (req.session.player.player_gold <= 0 || req.session.player.player_health <= 0 ) {
      return res.render('gameover')
    }

    req.connection.query('SELECT * FROM level_questions WHERE id = ?;', [req.params.page], (err, data) => {

      // res.json(data[0])
      // res.send(req.session.player )
      const q = data[0];
      const s = req.session.player;

      // catch any errors
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      };

      return res.render('index', {

        //questions from database
        qId: q.id,
        question: q.question,
        choices: q.choices,
        next_page: q.next_page_paths,
        current_page: q.current_page_number,
        background: q.image_path,

        // stats from session
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

//=========================================
  // get complete player stats from session
//=========================================

router
  .get('/player/stats', (req, res) => {

    // get complete stats
    return res.send(req.session.player)

  })      
  
//====================================
  // subtract gold when purchase cake 
//====================================

router
  .get('/gold/subtract', (req, result) => {

    // update session on database
    req.session.player.player_gold -= 100
    return result.send(req.session.player)
    
  });

//==============================
// update cake state to true
//==============================

router
  .get('/cake/true', (req, result) => {

    // update session on database
    req.session.player.cake_state = true
    return result.send(req.session)

  });

//==================================================================================
// login form post to pass to get request that populates the session on the database
//===================================================================================

router
  .post('/login', (req, res) => {

  // string to pass
  const name = String(req.body.name)

  // redirect to the get request to update session
  return res.redirect('/login/' + name)

})


//==========================================
// login params pass to session on database
//==========================================

router
  .get('/login/:name', (req, res) => {

  // res.json(request.params)
  // res.send(req.session)

  // variables to pass to the cookie
  const name = req.params.name
  const value = "player"

  // player object to pass to the cookie
  // will update the cookie when any variables are changed
  const player_object = {

    player_name: name,
    player_health: 100,
    player_defence: 25,
    player_gold: 1000,
    sword_state: true,
    sword_damage: 75,
    cake_state: false,
    torch_state: false,
    torch_damage: 125

  }
  
  // create a object inside the cookie with the value === "player"
  req.session[value] = player_object

  //redirect to the first level of the game
  return res.redirect('/game/level/1')
  
})

//===================================================
// update cake state to false
//===================================================
router
  .get('/cake/false', (req, result) => {

    req.session.player.cake_state = false
    return result.send(req.session)

});


//===================================================
// subtract health when riddle is incorrect
//===================================================

router
  .get('/health/subtract', (req, result) => {
  
    req.session.player.player_health -= 10
    return result.send(req.session.player)

  });

//===================================================
// update torch state to true
//===================================================

router
  .get('/torch/true', (req, result) => {

    req.session.player.torch_state = true
    return result.send(req.session)

  });
=======
const express = require('express')

const router = express.Router()

router
  .get('/:level', (req, res) => {

    req.connection.query('SELECT * FROM level_questions WHERE id = ?; SELECT * FROM player WHERE id = ?', [req.params.level, req.params.level], (err, data) => {
        
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

// router
//   .get('/cake/true', (req, result) => {
//     // const updateCakeTrue = "UPDATE player SET cake_state = true WHERE id = 1;";
//     //   // second query for adding the input quantity to the table
//     // req.connection.query(updateCakeTrue, (err, data) => {
//     //   // catch any errors
//     //   if (err) {
//     //     console.log(err);
//     //     return result.status(500).send('error');
//     //   };
//     //   console.log(data);
//     //   return result.status(200).send('successful change of cake state');
//     // });
//   });


// router
//   .get('/gold/subtract', (req, result) => {
//     // const columnQuery = "SELECT * FROM player WHERE id = 1;";
//     // req.connection.query(columnQuery, (err, res) => {
//     //   // catch any errors
//     //   if (err) {
//     //     console.log(err);
//     //     return res.status(500).send('oops');
//     //   };
//     //   //player from first connection.query is the first ?
//     //   const updateQuery = "UPDATE player SET ? WHERE id = 1;";
//     //   // update gold count in player row
//     //   const updateGold = res[0].player_gold - 100;
//     //   //object for query
//     //   const updateObject = [
//     //     {
//     //       player_gold: updateGold
//     //     }
//     //   ];
//     //   // second query for adding the input quantity to the table
//     //   req.connection.query(updateQuery, updateObject, (err, data) => {
//     //     // catch any errors
//     //     if (err) {
//     //       console.log(err);
//     //       return res.status(500).send('bfgsder');
//     //     };
//     //     console.log(data);
//     //     return result.status(200).send('successful subtraction of gold');
//     //   });
//     // });
//   });

// router
//   .get('/player/stats', (req, res) => {
//     // do not need connection query anymore, only grab from the session on the database
//     res.send(req.session.player)
//     //   req.connection.query('SELECT * FROM player WHERE id = 1;', (err, data) => {
//     //     // const d = data[0]
//     //     res.json(data) 
//     //     // res.render('index', {
//     //     //   id: d.id,
//     //     //   name: d.player_name,
//     //     //   health: d.player_health,
//     //     //   defence: d.player_defence,
//     //     //   gold: d.player_gold,
//     //     //   sword_state: d.sword_state,
//     //     //   sword_damage: d.sword_damage,
//     //     //   cake_state: d.cake_state,
//     //     //   torch_state: d.torch_state,
//     //     //   createdAt: d.createdAt
//     //     // })
//     //   })
//   })   


// //===================================================
// // update cake state to false
// //===================================================
// router
//   .put('/cake/false', (req, result) => {

//     const updateCakeFalse = "UPDATE player SET cake_state = false WHERE id = 1;";

//     // second query for adding the input quantity to the table
//     req.connection.query(updateCakeFalse, (err, data) => {

//       // catch any errors
//       if (err) {
//         console.log(err);
//         return result.status(500).send('error');
//       };

//       console.log(data);
//       return result.status(200).send('successful change of cake state');

//     });

//   });


//===================================================
// subtract health when riddle is incorrect
//===================================================

// router
//   .put('/health/subtract', (req, result) => {

//     const columnQuery = "SELECT * FROM player WHERE id = 1;";

//     req.connection.query(columnQuery, (err, res) => {

//       // catch any errors
//       if (err) {
//         console.log(err);
//         return res.status(500).send('oops');
//       };

//       //player from first connection.query is the first ?
//       const updateQuery = "UPDATE player SET ? WHERE id = 1;";

//       // update health in player row
//       const updateHealth = res[0].player_health - 10;

//       //object for query
//       const updateObject = [
//         {
//           player_health: updateHealth
//         }
//       ];

//       // second query for adding the input quantity to the table
//       req.connection.query(updateQuery, updateObject, (err, data) => {

//         // catch any errors
//         if (err) {
//           console.log(err);
//           return res.status(500).send('bfgsder');
//         };

//         console.log(data);
//         return result.status(200).send('successful loss of health');

//       });

//     });

//   });


//===================================================
// update torch state to true
//===================================================
// router
//   .put('/torch/true', (req, result) => {

//     const updateTorchTrue = "UPDATE player SET torch_state = true WHERE id = 1;";

//     // second query for adding the input quantity to the table
//     req.connection.query(updateTorchTrue, (err, data) => {

//       // catch any errors
//       if (err) {
//         console.log(err);
//         return result.status(500).send('error');
//       };

//       console.log(data);
//       return result.status(200).send('successful change of torch state');

//     });

//   });
