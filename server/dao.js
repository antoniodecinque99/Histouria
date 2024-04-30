'use strict';

const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./server/mydb.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the existing database.');
});


function getQuizzesByCategory(category) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM quizzes WHERE category = ?`, [category], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    }
  );
}

function getCategories() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM categories`, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }
);
}

function getQuestionsByQuiz(quiz_name) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM questions WHERE quiz_name = ?`, [quiz_name], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
}  

function insertQuiz(quiz) {
    return new Promise((resolve, reject) => {
        db.run("PRAGMA foreign_keys = ON");
        db.run(`INSERT INTO quizzes (quiz_name, category, picture, description) VALUES (?, ?, ?, ?)`,
            [quiz.quiz_name, quiz.category, quiz.picture, quiz.description],
            function(err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(this.lastID);
            }
            });
    });
}

function insertCategory(category) {
    return new Promise((resolve, reject) => {
        db.run("PRAGMA foreign_keys = ON");
        db.run(`INSERT INTO categories (category) VALUES (?)`,
            [category],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
    });
}

function insertQuestion(question) {
    return new Promise((resolve, reject) => {
        db.run("PRAGMA foreign_keys = ON");
        db.run(`INSERT INTO questions (quiz_name, question_text, answer_1, answer_2, answer_3, answer_4, correct_answer, explanation) VALUES (?,?,?,?,?,?,?,?)`,
            [question.quiz_name, question.question_text, question.answer_1, question.answer_2, question.answer_3, question.answer_4, question.correct_answer, question.explanation],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
    });
}


module.exports = {
    getQuizzesByCategory,
    getCategories,
    getQuestionsByQuiz,
    insertQuiz,
    insertCategory,
    insertQuestion
}

