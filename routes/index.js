var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);

/* Autor. */
router.get('/author', function(req, res) {
  //res.render('author', { foto: 'Quiz' });
  res.render('author', {autor: [{ nombre: 'Carlos Eduardo Peña Cauich', foto: '/images/me.jpg'}]});
});

module.exports = router;
