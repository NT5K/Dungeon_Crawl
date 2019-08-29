
// app.get('/login', (req, res) => {
//   res.send(req.session)
//   const object = {
//     player_name: "John Smith",
//     player_health: 100,
//     player_defence: 25,
//     player_gold: 1000,
//     sword_state: true,
//     sword_damage: 75,
//     cake_state: false,
//     torch_state: false,
//     torch_damage: 125
//   }
//   req.session[object]

// })

// app.get('/api/test/session/:name/:value', (req, res) => {
//   // res.send(req.session)
//   const name = req.params.name
//   const value = req.params.value
//   const object = {
//     player_name: name,
//     player_health: 100,
//     player_defence: 25,
//     player_gold: 1000,
//     sword_state: true,
//     sword_damage: 75,
//     cake_state: false,
//     torch_state: false,
//     torch_damage: 125
//   }
//   req.session[value] = object
//   res.send(req.session)
// })

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
