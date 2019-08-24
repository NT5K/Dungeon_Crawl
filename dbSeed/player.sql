CREATE TABLE player
(
    id INT
    AUTO_INCREMENT NOT NULL,
    player_name VARCHAR(255) NOT NULL,
    player_type VARCHAR(255) NOT NULL,  -- male / female / monster? 
    player_health INT(10) NOT NULL,
    player_attack INT(10) NOT NULL,
    player_defence INT(10) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

USE DUNGEON_CRAWLER;
INSERT INTO player(player_name, player_type, player_health, player_attack, player_defence)
values
    ("Nick", "Human", 50, 100, 75),
    ("Tony", "Human", 50, 100, 75),
    ("Eric", "Human", 50, 100, 75)