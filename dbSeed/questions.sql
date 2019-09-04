DROP TABLE level_questions;

CREATE TABLE level_questions
(
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(1000) NOT NULL,
    question VARCHAR(1000) NOT NULL,
    choices VARCHAR(1000) NOT NULL,
    next_page_paths VARCHAR(500) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    query_option VARCHAR(500),
    PRIMARY KEY(id)
);



    INSERT INTO level_questions
        (description, question, choices, next_page_paths, image_path, query_option)
    values
        (
            "path 1 when you are sitting at the table in the tavern",
            "You are at your table, drinking a pint of beer. There is a lady, a man and a door. What should you do?",
            "Talk to the man?, Talk to the woman?, Go to the door?",
            "2, 3, 9",
            "/images/backgrounds/page1.jpg",
            null-- tavern 1
    ),
        (
            "path 2 when you are looking at the man",
            "The old man says, 'trolls dont like fire!' and takes a puff of his pipe.",
            "Return to table, Continue talking to the man",
            "1, 22",
            "/images/backgrounds/page2.jpg",
            null-- old man 2
    ),
        (
            "path 3 when you are talking to the old lady",
            "The lady has cake. You can either buy a slice for 500 gold or answer a question correctly and get one free.",
            "Buy a slice for 500 gold, Answer a question, Go back",
            "5, 6, 1",
            "/images/backgrounds/page3.jpg",
            null-- old lady 3
    ),
        (

            "path 4 you purchased the cake, the lady says something else",
            "torches are ouchy...but strong!",
            "Go back to your seat",
            "1",
            "/images/backgrounds/page17.jpg",
            null-- old lady no cake
    ),
        (
            "path 5 buy the slice with gold",
            "You purchased a slice of cake for some gold!",
            "Return to your table, Talk to the old woman again",
            "1, 4",
            "/images/backgrounds/page10.jpg",
            "/gold/subtract/500/cake/true"-- old lady hands cake for gold
    ),
        (
            -- unused path, now goes to riddle.ejs
            "path 6 the riddle",
            "Riddle: Towns without houses, forests without trees, mountains without boulders and waterless seas., What is the answer?",
            "A Ocean, A Map, The Sky, A Beach",
            "7, 18, 19, 8", -- 7,18,19 are incorrect choice paths
            "/images/backgrounds/page11.jpg",
            null-- old lady 3
    ),
        (
            "path 7 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another question, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            "/images/backgrounds/page12.jpg",
            "/health/subtract/10"-- old lady 3
    ),
        (
            "path 8 you answer the riddle correctly",
            "Congratulations you answered the riddle correctly! You now have cake in your inventory.",
            "Go back to your table, Talk to the old lady again",
            "1, 4",
            "/images/backgrounds/page13.jpg",
            "/cake/true"-- old lady 3
    ),
        (
            "path 9 you are now outside the tavern",
            "You are outside the tavern and you see a bunch of torches and a troll blocking a dungeon, what should you do?",
            "Talk to the Troll, Inspect the torches, Go back inside",
            "10, 16, 1",
            "/images/backgrounds/page4.jpg",
            null-- outside
    ),
        (
            "path 10 you are looking at the troll in front of the dungeon",
            "Snargle Snargle, I am a troll and me like cake! Do you have cake?",
            "Yes, Fight the troll with your sword, Go back",
            "11, 13, 9",
            "/images/backgrounds/page18.jpg",
            null-- troll
    ),
        (
            "path 11 you gave the cake to the troll",
            "Mmm. Yummy Yummy! Me like cake. The troll moves aside and the door to the dungeon is open",
            "Go into the dungeon",
            "99",
            "/images/backgrounds/page9.jpg",
            null -- dungeon open
    ),
        (
            "path 12 you say you have the cake but actually dont",
            "Bah! You dont have cake! Me take gold! (lose 250 gold)",
            "Go back, Fight the troll with your sword",
            "9, 13",
            "/images/backgrounds/page14.jpg",
            "/subtract/gold/250"-- troll
    ),
        (
            "path 13 battle directions",
            "You ready to fight!?!",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            "/images/backgrounds/page6.jpg",
            null--  battle troll
    ),
        (
            "path 14 you are fighting the troll",
            "You attacked the troll! The troll lost health. He attacks you.",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            "/images/backgrounds/page15.jpg",
            null--  battle troll
    ),
        (
            "path 15 you are gaining defence, the troll has less attack power",
            "You gain some health back! He attacks you..",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            "/images/backgrounds/page16.jpg",
            null--  battle troll
    ),
        (
            "path 16 you are looking at the torch",
            "There is a torch with a red hot flame. Do you grab it? (Its hot though! You will loose 10 health)",
            "Yes, Go back",
            "17, 9",
            "/images/backgrounds/page7.jpg",
            null-- torch
    ),
        (
            "path 17 you picked up the torch",
            "Ouch that is hot! You have added the torch to your inventory. Trolls do not like fire!",
            "Go back",
            "9",
            "/images/backgrounds/page8.jpg",
            "/torch/true/health/subtract"-- torch gone
    ),
        (
            "path 18 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another question, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            "/images/backgrounds/page12.jpg",
            "/health/subtract/10"-- old lady 3
    ),
        (
            "path 19 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another question, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            "/images/backgrounds/page12.jpg",
            "/health/subtract/10"-- old lady 3
    ),
        (
            "path 20 you already have a torch",
            "You already have a torch in your inventory.",
            "Go back",
            "9",
            "/images/backgrounds/page7.jpg",
            null-- torch gone
    ),
        (
            "path 21 you talk to the old lady but already have the cake",
            "You already cake in your inventory! Do you really need seconds?",
            "Return to your table",
            "1",
            "/images/backgrounds/page3.jpg",
            null-- old lady 3
    ),
        (
            "path 22 you continue to talk to the old man, insists you buy him a beer",
            "The old man doesnt want to talk and makes you buy him a beer. You lost 250 gold.",
            "Return to your table",
            "1",
            "/images/backgrounds/page19.jpg",
            "/subtract/gold/250" -- old man
    )