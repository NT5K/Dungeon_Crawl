
-- ***********************************************************************************
-- we do not need this anymore because the player data is stored with express-session
-- ***********************************************************************************

CREATE TABLE player
(
    id INT
    AUTO_INCREMENT NOT NULL,
    player_name VARCHAR(255) NOT NULL,
    player_health INT(10) NOT NULL,
    player_defence INT(10) NOT NULL,
    player_gold INT(10) NOT NULL,
    sword_state BOOL,
    sword_damage INT(10) NOT NULL,
    cake_state BOOL,
    torch_state BOOL,
    torch_damage INT(10) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

USE DUNGEON_CRAWLER;
INSERT INTO player
    (player_name, player_health, player_defence, player_gold, sword_state, sword_damage, cake_state, torch_state, torch_damage)
values
    ("Person", 100, 100, 1000, true, 100, false, false, 50)