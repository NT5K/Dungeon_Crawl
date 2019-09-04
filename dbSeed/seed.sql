-- *********************
-- unused old seed
-- *********************


CREATE DATABASE DUNGEON_CRAWLER;


-- user table

USE DUNGEON_CRAWLER;

CREATE TABLE level_questions
(
    id INT
    AUTO_INCREMENT NOT NULL,
    question VARCHAR
    (500) NOT NULL,
    choices VARCHAR
    (500) NOT NULL,
    PRIMARY KEY
    (id)
);

 -- player table

CREATE TABLE player
(
    id INT
    AUTO_INCREMENT NOT NULL,
    player_name VARCHAR
    (255) NOT NULL,
    player_type VARCHAR
    (255) NOT NULL,  -- male / female / monster? 
    player_health INT
    (10) NOT NULL,
    player_attack INT
    (10) NOT NULL,
    player_defence INT
    (10) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY
    (id)
);

    USE DUNGEON_CRAWLER;
    INSERT INTO player
        (player_name, player_type,player_health, player_attack, player_defence )
    values
        ("Nick", "Human", 50, 100, 75),
        ("Tony", "Human", 50, 100, 75),
        ("Eric", "Human", 50, 100, 75)



USE DUNGEON_CRAWLER;
INSERT INTO level_questions
    (question, choices)
values
    ("This is question 1", "one1, tw2, thre3, fou4, fi5e"),
    ("This is question 2", "one1, t2, thr2e, fo4, fi5ve"),
    ("This is question 3", "on61, t6, th6, fou6r, fiv7")
