CREATE DATABASE DUNGEON_CRAWLER;

-- drop table level_questions


CREATE TABLE level_questions
(
    id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(1000) NOT NULL,
    question VARCHAR(1000) NOT NULL,
    choices VARCHAR(1000) NOT NULL,
    page_number VARCHAR(500) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    PRIMARY KEY(id)
);


    USE DUNGEON_CRAWLER;
    INSERT INTO level_questions
        (description, question, choices, page_number, image_path)
    values
        (
            "path 1 when you are sitting at the table in the tavern",
            "You are at your table, drinking a pint of beer. There is a lady a man and a door. What should you do?",
            "Talk to the man?, Talk to the woman?, Go to the door?",
            "2, 3, 4",
            "/images/backgrounds/page1.jpg" -- tavern 1
    ),
        (
            "path 2 when you are looking at the man",
            "The old man says, trolls dont like fire! and takes a sip of his beer.",
            "Return to table",
            "1",
            "/images/backgrounds/page2.jpg" -- old man 2
    ),
        (
            "path 3 when you are talking to the old lady",
            "The old lady has a cake and she asks you if you would like to buy a slice or answer a riddle correct and recieve a free slice.",
            "Buy a slice for half your gold, Answer the riddle",
            "5, 6",
            "/images/backgrounds/page3.jpg" -- old lady 3
    ),
        (
            "path 4 you are now outside",
            "You are now outside, you see a troll guarding a dungeon or you can go back in the tavern, what should you do?",
            "Talk to the troll, go back into the tavern",
            "9, 1",
            "/images/backgrounds/page4.jpg" -- outside 4
    ),
        (
            "path 5 buy the slice with gold",
            "You purchased a spice of cake for half your gold!",
            "Return to your table, Talk to the old woman again",
            "1, 3",
            "/images/backgrounds/page3.jpg"  -- old lady 3
    ),
        (
            "path 6 the first riddle",
            "Riddle: Towns without houses, forests without trees, mountains without boulders and waterless seas., What is the answer?",
            "A Boat, A Map, A Forest, A Beach",
            "7, 8, 7, 7",
            "/images/backgrounds/page3.jpg"  -- old lady 3
    ),
        (
            "path 7 incorrect riddle choice",
            "I am sorry you answered incorrectly, you lost 10 health! What would you like to do now",
            "Answer another Riddle, Pay the lady, Go back to your table",
            "6, 5, 1",
            "/images/backgrounds/page3.jpg"  -- old lady 3
    ),
        (
            "path 8 you answer the riddle correctly",
            "congratulations you answered correctly!!!",
            "go back to your table",
            "1",
            "/images/backgrounds/page3.jpg"  -- old lady 3
    ),
        (
            "path 9 you are looking at the troll",
            "The troll needs cake! He wont let you into the dungeon unless you have cake! Do you have cake?",
            "Yes, No",
            "10, 11",
            "/images/backgrounds/page5.jpg" -- troll
    ),
        (
            "path 10 you do not have cake",
            "The troll needs cake! He wont let you into the dungeon unless you have cake! Do you have cake?",
            "Yes, No",
            "10, 11",
            "/images/backgrounds/page5.jpg" -- troll
    )