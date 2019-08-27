router
    .get('/game/level/:page', authenticationMiddleware(), (req, res) => {

        console.log(req.user)
        console.log(req.isAuthenticated())
        req.connection.query('SELECT * FROM level_questions WHERE id = ?;', [req.params.page], (err, data) => {
            const user = req.session.player
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