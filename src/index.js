var express = require('express');
var app = express();
let pug = require('pug')
let path = require('path')

// import { Board } from './public/board'

let globalBoard = ['.', '.', '.','.', '.', '.', '.', '.', '.']

app.use(express.static('dist/public'));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/api/games/new', function(req, res){
  console.log('Attempting to create new game...')
  res.render('index', {
    title: 'Tic Tac Toe (Simple)',
    message: 'Hello there!'
  });
})

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Tic Tac Toe (Simple)',
    message: 'Tic Tac Toe'
  });
});

app.get('/super', (req, res) => {
  res.render('super', {
    title: 'Super Tic Tac Toe',
    message: 'Google it'
  })
})