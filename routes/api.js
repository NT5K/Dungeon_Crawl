
const express = require('express');
const router = express.Router();

//=================================
  // game level and player stats
//=================================
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
        troll_health: s.troll_health,
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

//=================================
  // check cake state (NOT WORKING)
//=================================

router
  .get('/cake/check', (req, res) => {

    // update session on database
    if (req.session.player.cake_state) {
      return res.redirect('/game/level/11')
    } else {
      return res.redirect('/game/level/1')
    }

  });

//====================================================================================
  // login form post to pass to get request that populates the session on the database
//====================================================================================

router
  .post('/login', (req, res) => {

    // string to pass
    const name = String(req.body.name)

    // if form has data continue to game else load start screen again
    if (req.body.name === '') {
      return res.render('startscreen')
    } else {
      // redirect to the get request to update session
      return res.redirect('/login/' + name)
    }
 
  })

//============================================
  // login params pass to session on database
//============================================

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
      torch_damage: 125,
      troll_health: 100

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

//===================================================
/////////////////////////////////////////////////////
//===================================================

module.exports = router

