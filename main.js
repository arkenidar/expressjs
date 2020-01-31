// npm install express ejs path --save

// npm install express --save
const express = require('express')
const app = express()
// npm install ejs --save
app.set('view engine', 'ejs')
// npm install path --save
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
// http://localhost:3000/test.txt

app.get('/', function (req, res) {
  res.send('Hello World!')
})
// http://localhost:3000/

app.get('/json',function(req,res){
  //res.json
  res.json({ user: 'arkenidar' })
  //res.status(404).json({error:'not found'})
})
// http://localhost:3000/json

app.get('/template', function(req,res){
  res.render('time.ejs', {time: new Date().toDateString()})
})
// http://localhost:3000/template

app.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
})
// http://localhost:3000/floor/2/bedroom

var quiz_set_1=[
  ["does a star emit light?",["yes","no"],0],
  ["is a human always right?",["yes","no"],1]
  ]

app.get('/quiz/questions', function(req,res){
  res.render('quiz_questions.ejs',{set:quiz_set_1})
})

app.get('/quiz/answers', function(req,res){
  res.render('quiz_answers.ejs',{set:quiz_set_1,query:req.query})
})

app.listen(3000)
