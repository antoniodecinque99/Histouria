const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');


const dao = require('./dao');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'src/assets/Quizzes');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// init express
const app = new express();

app.use(morgan('common'));
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: "GET,HEAD,PUT,POST,DELETE"
};
app.use(cors(corsOptions));

app.get('/categories', async (req, res) => {
  try {
    const categories = await dao.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// for example, http://localhost:3001/quizzes?category=Prehistoric times
app.get('/quizzes', async (req, res) => {
    const category = req.query.category;
    try {
      const quizzes = await dao.getQuizzesByCategory(category);
      res.status(200).json(quizzes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


app.get('/quizzes/:quiz_name/questions', async (req, res) => {
    const quiz_name = req.params.quiz_name;
    try {
      const questions = await dao.getQuestionsByQuiz(quiz_name);
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});  


app.put('/quizzes', async (req, res) => {
    try {
      const quiz = req.body;
      const result = await dao.insertQuiz(quiz);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

app.put('/categories', async (req, res) => {
    try {
        const category = req.body;
        const result = await dao.insertCategory(category);
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
});

app.put('/questions/:quiz_name', async (req, res) => {
    try {
        const question = req.body;
        const quiz_name = req.params.quiz_name;
        const mergedObject = { quiz_name, ...question };

        const id = await dao.insertQuestion(mergedObject);
        res.json({
            message: 'New question inserted successfully',
            id: id
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error inserting new question',
            error: err.message
        });
    }
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
  }

  const file = req.file;
  const fileName = file.originalname;

  console.log(file);
  console.log(fileName);

  return res.status(200).json({
      message: 'File uploaded successfully',
      fileName: fileName
  });
});

  

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


