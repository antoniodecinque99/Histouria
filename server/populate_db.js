const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./server/mydb.db');


db.serialize(() => {
    db.exec("DROP TABLE questions; DROP TABLE quizzes; DROP TABLE categories;");

    db.run("PRAGMA foreign_keys = ON");

    db.run(`CREATE TABLE categories(
        category TEXT PRIMARY KEY)`);
    
    db.run(`CREATE TABLE quizzes (
        quiz_name TEXT PRIMARY KEY,
        category TEXT,
        picture TEXT,
        description TEXT,
        FOREIGN KEY(category) REFERENCES categories(category) ON UPDATE CASCADE ON DELETE CASCADE
        )`);
    
    db.run(`CREATE TABLE questions (
        quiz_name TEXT,
        question_text TEXT,
        answer_1 TEXT,
        answer_2 TEXT,
        answer_3 TEXT,
        answer_4 TEXT,
        correct_answer INTEGER,
        explanation TEXT,
        PRIMARY KEY(quiz_name, question_text),
        FOREIGN KEY(quiz_name) REFERENCES quizzes(quiz_name) ON UPDATE CASCADE ON DELETE CASCADE
        )`);
    
    // insert data into categories
    db.run(`INSERT INTO categories (category) VALUES ("Prehistoric times"),("Explorers"),("World history")`);

    // insert data into the quizzes table
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Big Bang", "big_bang.jpg", "Prehistoric times", "Learn about the origins of the universe"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Bows and arrows", "bows_and_arrows.jpg", "Prehistoric times", "Discover the history of archery"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Dinosaurs", "dinosaurs.jpg", "Prehistoric times", "Explore the world of prehistoric creatures"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Fossils", "fossils.jpg", "Prehistoric times", "Learn about the history of life on Earth"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Geologic time", "geologic_time.jpg", "Prehistoric times", "Discover the history of our planet"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Ice Age", "ice_age.jpg", "Prehistoric times", "Learn about the Earth's climate history"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Plate tectonics", "plate_tectonics.jpg", "Prehistoric times", "Discover how the Earth's crust moves"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Prehistoric animals", "prehistoric_animals.jpg", "Prehistoric times", "Explore the world of ancient creatures"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Wheel invention", "wheel_invention.jpg", "Prehistoric times", "Learn about the history of transportation"]);

    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Amelia Earhart", "amelia_earhart.jpg", "Explorers", "Learn about the life and accomplishments of Amelia Earhart"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Astronauts", "astronauts.jpg", "Explorers", "Learn about the history of space exploration"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Christopher Columbus", "columbus.jpg", "Explorers", "Learn about the life and voyages of Christopher Columbus"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Ferdinand Magellan", "magellan.jpg", "Explorers", "Learn about the life and voyages of Ferdinand Magellan"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["James Cook", "cook.jpg", "Explorers", "Learn about the life and voyages of James Cook"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Maps of the world", "maps_of_the_world.jpg", "Explorers", "Learn about the history of cartography"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Vasco da Gama", "vasco_da_gama.jpg", "Explorers", "Learn about the life and voyages of Vasco da Gama"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Vikings", "vikings.jpg", "Explorers", "Learn about the history and culture of the Vikings"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Exploration of Africa", "exploration_of_africa.jpg", "Explorers", "Learn about the history of exploration in Africa"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Exploration of the America", "exploration_of_america.jpg", "Explorers", "Learn about the history of exploration in America"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Exploration of the poles", "exploration_of_the_poles.jpg", "Explorers", "Learn about the history of exploration at the Earth's poles"]);

    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Alexander The Great", "alexander.jpg", "World history", "Learn about the life and accomplishments of Alexander The Great"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Ancient Egypt", "egypt.jpg", "World history", "Learn about the history of ancient Egypt"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Ancient Greece", "greece.jpg", "World history", "Learn about the history of ancient Greece"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Aristotle", "aristotle.jpg", "World history", "Learn about the life and philosophy of Aristotle"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Aztec Empire", "aztec.jpg", "World history", "Learn about the history of the Aztec Empire"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Buddha", "buddha.jpg", "World history", "Learn about the life and teachings of Buddha"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Castles", "castles.jpg", "World history", "Learn about the history of castles"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Charles Magne", "charles_magne.jpg", "World history", "Learn about the life and reign of Charles Magne"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Cleopatra", "cleopatra.jpg", "World history", "Learn about the life and reign of Cleopatra"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Cold War", "cold_war.jpg", "World history", "Learn about the history of the Cold War"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Confucius", "confucius.jpg", "World history", "Learn about the life and teachings of Confucius"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Communism", "communism.jpg", "World history", "Learn about the history of communism"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Democracy", "democracy.jpg", "World history", "Learn about the history and principles of democracy"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["European Union", "eu.jpg", "World history", "Learn about the history and workings of the European Union"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Flags", "flags.jpg", "World history", "Learn about the history and symbolism of flags"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Great Wall of China", "great_wall.jpg", "World history", "Learn about the history and construction of the Great Wall of China"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Inca Empire", "inca.jpg", "World history", "Learn about the history of the Inca Empire"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Industrial Revolution", "industrial_revolution.jpg", "World history", "Learn about the history of the Industrial Revolution"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Joan of Arc", "joan_of_arc.jpg", "World history", "Learn about the life and legacy of Joan of Arc"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Julius Caesar", "julius_caesar.jpg", "World history", "Learn about the life and accomplishments of Julius Caesar"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Kings and Queens", "kings_queens.jpg", "World history", "Learn about the history of kings and queens"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Marco Polo", "marco_polo.jpg", "World history", "Learn about the life and travels of Marco Polo"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Martin Luther", "martin_luther.jpg", "World history", "Learn about the life and teachings of Martin Luther"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Maya Civilization", "maya.jpg", "World history", "Learn about the history of the Maya Civilization"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Mesopotamia", "mesopotamia.jpg", "World history", "Learn about the history of Mesopotamia"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Mohandas Gandhi", "gandhi.jpg", "World history", "Learn about the life and legacy of Mohandas Gandhi"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Napoleon", "napoleon.jpg", "World history", "Learn about the life and accomplishments of Napoleon"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Nelson Mandela", "mandela.jpg", "World history", "Learn about the life and legacy of Nelson Mandela"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Queen Elizabeth", "queen_elizabeth.jpg", "World history", "Learn about the life and reign of Queen Elizabeth"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Roman Empire", "roman_empire.jpg", "World history", "Learn about the history of the Roman Empire"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Socrates", "socrates.jpg", "World history", "Learn about the life and philosophy of Socrates"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["Space Travel", "space_travel.jpg", "World history", "Learn about the history of space travel"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["World War I", "ww1.jpg", "World history", "Learn about the causes, events and consequences of World War I"]);
    db.run("INSERT INTO quizzes (quiz_name, picture, category, description) VALUES (?, ?, ?, ?)", ["World War II", "ww2.jpg", "World history", "Learn about the causes, events and consequences of World War II"]);

    // insert data into the questions table
    // quiz: Big Bang
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Big Bang", "How old is the universe?", "10 years old", "1 million years old", "13.8 billion years old", "20 billion years old", 3, "The universe is approximately 13.8 billion years old."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Big Bang", "What was the universe like before the Big Bang?", "Empty and dark", "Full of stars and galaxies", "A big ball of fire", "A big explosion", 1, "Before the Big Bang, scientists believe that the universe was empty and dark."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Big Bang", "What happened during the Big Bang?", "The universe got smaller", "The universe got bigger", "The universe stayed the same", "The universe disappeared", 2, "During the Big Bang, the universe began to expand and has continued to expand ever since."]);

    // quiz: Bows and arrows
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Bows and arrows", "Who were some ancient cultures that used bows and arrows?", "Egyptians", "Greeks", "Romans", "Mongols", 4, "Mongols were known for their skilled archers and the use of horseback archery."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Bows and arrows", "What time period is the history of bows and arrows traced back to?", "Middle ages", "Ancient Greece", "Bronze age", "Neolithic period", 4, "The history of bows and arrows can be traced back to the Neolithic period."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Bows and arrows", "How were bows and arrows used in ancient times?", "Hunting", "Fighting", "Religious ceremonies", "All of the above", 4, "Bows and arrows were used for hunting, fighting and in religious ceremonies in ancient times."]);

    // quiz: Dinosaurs
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Dinosaurs", "What era did dinosaurs live in?", "Jurassic", "Triassic", "Cretaceous", "Paleozoic", 2, "Dinosaurs lived in the Triassic, Jurassic and Cretaceous eras."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Dinosaurs", "What is the largest dinosaur?", "T-Rex", "Brachiosaurus", "Diplodocus", "Argentinosaurus", 4, "Argentinosaurus is the largest dinosaur ever discovered."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Dinosaurs", "When did dinosaurs go extinct?", "65 million years ago", "200 million years ago", "350 million years ago", "450 million years ago", 1, "Dinosaurs went extinct about 65 million years ago."]);

    // quiz: Fossils
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Fossils", "What are fossils?", "Rocks", "Plants", "Remains of ancient life", "Metal", 3, "Fossils are the remains of ancient life that have been preserved over time."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Fossils", "How are fossils formed?", "Buried in lava", "Buried in sand", "Buried in ash", "All of the above", 4, "Fossils can be formed by being buried in lava, sand, ash or other sediment."]);

    // quiz: Geologic Time
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Geologic time", "What is the study of geologic time called?", "Geography", "Geology", "Paleontology", "Astronomy", 2, "The study of geologic time is called geology. This field of study focuses on the Earth's history and the processes that have shaped it over millions of years."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Geologic time", "How long is the history of Earth?", "1 million years", "10 million years", "100 million years", "4.5 billion years", 4, "The history of Earth is about 4.5 billion years. This includes the formation of the Earth, the emergence of life, the evolution of different species and the formation of the current landscape."]);

    // quiz: Ice Age
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Ice Age", "What is an Ice Age?", "A cold period", "A warm period", "A period of high rainfall", "A period of drought", 1, "An Ice Age is a period of time when the Earth's temperature drops, causing ice and snow to spread across the planet."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Ice Age", "How many Ice Ages have occurred in Earth's history?", "1", "2", "3", "Many", 4, "Many Ice Ages have occurred in Earth's history, with the most recent one ending about 11,000 years ago."]);

    // quiz: Plate tectonics
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Plate tectonics", "What is plate tectonics?", "A type of rock", "A type of weather", "A theory that explains the movement of the Earth's lithosphere", "A type of ocean current", 3, "Plate tectonics is a theory that explains the movement of the Earth's lithosphere, which is the outer layer that includes the continents and ocean floor."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Plate tectonics", "What are the three types of plate boundaries?", "Convergent, divergent, and transform", "Divergent, transform, and convergent", "Convergent, transform, and divergent", "Divergent, convergent, and transform", 1, "The three types of plate boundaries are convergent, divergent, and transform. Convergent boundaries are where plates collide, divergent are where plates move apart and transform are where plates slide past each other."]);

    // quiz: Prehistoric animals
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Prehistoric animals", "What are prehistoric animals?", "Animals that lived in the past", "Animals that live in the present", "Animals that will live in the future", "Fictional animals", 1, "Prehistoric animals are animals that lived in the past before the existence of human beings."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Prehistoric animals", "What is the name of the largest dinosaur?", "T-Rex", "Brachiosaurus", "Diplodocus", "Argentinosaurus", 4, "Argentinosaurus is the largest dinosaur ever discovered."]);

    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Wheel invention", "When was the wheel invented?", "3000 BC", "2000 BC", "1000 BC", "500 BC", 1, "The wheel was invented around 3000 BC in ancient Mesopotamia."]);
    db.run("INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", ["Wheel invention", "What was the wheel used for originally?", "Transportation", "Building", "Agriculture", "All of the above", 4, "The wheel was used for transportation, building and agriculture in ancient times."]);

    db.close();
    
})


