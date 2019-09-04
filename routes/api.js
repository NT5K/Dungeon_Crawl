
const express = require('express');
const router = express.Router();
var axios = require("axios");

//=================================
  // game level and player stats
//=================================
router
  .get('/game/level/:page', (req, res) => {

    // variable for session player info
    const sess = req.session.player

    // redirect to game over screen if lost all gold is zero or below
    if (sess.player_gold <= 0) {
      return res.redirect('/your_broke')
    }

    // redirect to game over screen if lost all health is zero or below
    else if (sess.player_health <= 0) {
      return res.redirect('/you_died')
    } 
  
    // query the question database
    else {
      req.connection.query('SELECT * FROM level_questions WHERE id = ?;', [req.params.page], (err, data) => {

        // if page number is greater than the last question id, then redirect to the start page
        // CHANGE TO MAX DATABASE NUMBER IN THE END
        if (req.params.page > 22) {
          return res.redirect('/game_win')
        }
      
        // variables for index.ejs
        const q = data[0];

        // if you already have a torch and at torch scene
        if (q.id === 16 && sess.torch_state) {
          res.redirect('/game/level/20')
        }

        // if you already have a cake and talking to the lady
        else if (q.id === 3 && sess.cake_state) {
          res.redirect('/game/level/21')
        }

        // if you say yes but do not have cake 
        else if (q.id === 11 && !sess.cake_state) {
          res.redirect('/game/level/12')
        }
        // catch any errors
        else if (err) {
          console.log(err);
          return res.status(500).send('oops');
        }

        // show the index page with current page
        else if (q.id === 6) {

          const queryURL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"

          axios
            .get(queryURL).then(
            function (response) {

              const queryData = response.data.results[0]
              
              res.render('riddle', {
                qId: q.id,
                question: queryData.question,
                choices: queryData.incorrect_answers,
                answer: queryData.correct_answer,
                next_page: q.next_page_paths,
                description: q.description,
                // current_page: q.current_page_number,
                background: q.image_path,
                query_option: q.query_option,

                // stats from session
                name: sess.player_name,
                health: sess.player_health,
                defence: sess.player_defence,
                gold: sess.player_gold,
                sword_sess: sess.sword_state,
                sword_damage: sess.sword_damage,
                cake_state: sess.cake_state,
                torch_state: sess.torch_state,
                troll_health: sess.troll_health,
                createdAt: sess.createdAt

              })

          })

        } else {

          return res.render('index', {
  
            //questions from database
            qId: q.id,
            question: q.question,
            choices: q.choices,
            next_page: q.next_page_paths,
            description: q.description,
            // current_page: q.current_page_number,
            background: q.image_path,
            query_option: q.query_option,
  
            // stats from session
            name: sess.player_name,
            health: sess.player_health,
            defence: sess.player_defence,
            gold: sess.player_gold,
            sword_sess: sess.sword_state,
            sword_damage: sess.sword_damage,
            cake_state: sess.cake_state,
            torch_state: sess.torch_state,
            troll_health: sess.troll_health,
            createdAt: sess.createdAt
            
  
          });

        }

      });

    }

  });

//=========================================
  // subtract gold when purchase cake = true
//=========================================

router
  .get('/gold/subtract/500/cake/true', (req, res) => {

    const x = req.session

    // update session on database
    x.player.player_gold -= 500
    x.player.cake_state = true
    return res.send(x.player)
    
  });

//=============================================
  // subtract 250 gold when talking to old man
//=============================================

router
  .get('/subtract/gold/250', (req, res) => {

    const x = req.session

     // update session on database
    x.player.player_gold -= 250
    return res.send(x.player)

  });

//===================================================
// update torch state to true
//===================================================

router
  .get('/torch/true/health/subtract', (req, res) => {

    const x = req.session

     // update session on database
    x.player.torch_state = true
    x.player.player_health -= 10
    return res.send(x)

  });

//===================================================
// subtract 10 health
//===================================================

router
  .get('/health/subtract/10', (req, res) => {

    const x = req.session

     // update session on database
    x.player.player_health -= 10
    return res.send(x)

  });

//=========================================
  // get complete player stats from session
//=========================================

router
  .get('/player/stats', (req, res) => {

    // get complete stats
    return res.send(req.session)

  })      


//=========================================
  // update cake state to true for riddle
//=========================================

router
  .get('/cake/true', (req, res) => {

    // update session on database
    req.session.player.cake_state = true
    return res.send(req.session)

  });

// //===================================================
//   // update cake state to false
// //===================================================

// router
//   .get('/cake/false', (req, res) => {

//     req.session.player.cake_state = false
//     return res.send(req.session)

//   });

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
      // redirect to the get request to create session
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



//=========================================
// view all sessoins
//=========================================

router
  .get('/sessions/all', (req, res) => {

    req.connection.query('SELECT * FROM sessions;', (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('oops');
      }

      return res.json(data)

    })

  })    
  
//=========================================
// view your cookie
//=========================================

router
  .get('/sessions/yours', (req, res) => {

    res.json(req.session)

  })      


//===================================================
/////////////////////////////////////////////////////
//===================================================

module.exports = router

