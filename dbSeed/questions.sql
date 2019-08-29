-- DROP TABLE level_questions

CREATE TABLE level_questions
(
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(1000) NOT NULL,
    question VARCHAR(1000) NOT NULL,
    choices VARCHAR(1000) NOT NULL,
    next_page_paths VARCHAR(500) NOT NULL,
    current_page_number INT(10) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);



    INSERT INTO level_questions
        (description, question, choices, next_page_paths, current_page_number, image_path)
    values
        (
            "path 1 when you are sitting at the table in the tavern",
            "You are at your table, drinking a pint of beer. There is a lady a man and a door. What should you do?",
            "Talk to the man?, Talk to the woman?, Go to the door?",
            "2, 3, 9",
            1,
            "/images/backgrounds/page1.jpg" -- tavern 1
    ),
        (
            "path 2 when you are looking at the man",
            "The old man says, 'trolls dont like fire!' and takes a puff of his pipe.",
            "Return to table",
            "1",
            2,
            "/images/backgrounds/page2.jpg" -- old man 2
    ),
        (
            "path 3 when you are talking to the old lady",
            "The old lady has a cake and she asks you if you would like to buy a slice or answer a riddle correct and recieve a free slice.",
            "Buy a slice for 500 gold, Answer the riddle",
            "5, 6",
            3,
            "/images/backgrounds/page3.jpg" -- old lady 3
    ),
        (

            "path 4 you purchased the cake, the lady says something else",
            "torches are ouchy...but strong!",
            "Go back to your seat",
            "1",
            4,
            "/images/backgrounds/page17.jpg" -- old lady no cake
    ),
        (
            "path 5 buy the slice with gold",
            "You purchased a spice of cake for some gold!",
            "Return to your table, Talk to the old woman again",
            "1, 4",
            5,
            "/images/backgrounds/page10.jpg"  -- old lady hands cake for gold
    ),
        (
            "path 6 the first riddle",
            "Riddle: Towns without houses, forests without trees, mountains without boulders and waterless seas., What is the answer?",
            "A Ocean, A Map, The Sky, A Beach",
            "7, 8, 71, 72",
            6,
            "/images/backgrounds/page11.jpg"  -- old lady 3
    ),
        (
            "path 7 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another Riddle, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            7,
            "/images/backgrounds/page12.jpg"  -- old lady 3
    ),
        (
            "path 8 you answer the riddle correctly",
            "Congratulations you answered the riddle correctly! You now have cake in your inventory.",
            "Go back to your table, Talk to the old lady again",
            "1, 4",
            8,
            "/images/backgrounds/page13.jpg"  -- old lady 3
    ),
        (
            "path 9 you are now outside the tavern",
            "You are outside the tavern and you see a bunch of torches and a troll blocking a dungeon, what should you do?",
            "Talk to the Troll, Inspect the torches, Go back inside",
            "10, 16, 1",
            9,
            "/images/backgrounds/page4.jpg" -- outside
    ),
        (
            "path 10 you are looking at the troll in front of the dungeon",
            "Snargle Snargle, I am a troll and me like cake! Do you have cake?",
            "Yes, Fight the troll with your sword, Go back",
            "11, 13, 9",
            10,
            "/images/backgrounds/page18.jpg" -- troll
    ),
        (
            "path 11 you gave the cake to the troll",
            "Mmm. Yummy Yummy! Me like cake. The troll moves aside and the door to the dungeon is open",
            "Go into the dungeon",
            "19",
            11,
            "/images/backgrounds/page9.jpg" -- dungeon open
    ),
        (
            "path 12 you say you have the cake but actually dont",
            "Bah! You dont have cake! Me take gold! (loose 200 gold)",
            "Go back, Fight the troll with your sword",
            "9, 13",
            12,
            "/images/backgrounds/page14.jpg" -- troll
    ),
        (
            "path 13 battle directions",
            "You ready to fight!?!",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            13,
            "/images/backgrounds/page6.jpg" --  battle troll
    ),
        (
            "path 14 you are fighting the troll",
            "You attacked the troll! The troll lost health. He attacks you.",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            14,
            "/images/backgrounds/page15.jpg" --  battle troll
    ),
        (
            "path 15 you are gaining defence, the troll has less attack power",
            "You gain some health back! He attacks you..",
            "Attack the troll, Gain some health, Leave the battle",
            "14, 15, 9",
            15,
            "/images/backgrounds/page16.jpg" --  battle troll
    ),
        (
            "path 16 you are looking at the torch",
            "There is a torch with a red hot flame. Do you grab it? (Its hot though! You will loose 20 health)",
            "Yes, Go back",
            "17, 9",
            16,
            "/images/backgrounds/page7.jpg" -- torch
    ),
        (
            "path 17 you picked up the torch",
            "Ouch that is hot! You have added the torch to your inventory. Trolls do not like fire!",
            "Go back",
            "9",
            17,
            "/images/backgrounds/page8.jpg" -- torch gone
    ),
        (
            "path 7 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another Riddle, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            71,
            "/images/backgrounds/page12.jpg"  -- old lady 3
    ),
        (
            "path 7 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another Riddle, Pay the lady for the cake, Go back to your table",
            "6, 5, 1",
            72,
            "/images/backgrounds/page12.jpg"  -- old lady 3
    )