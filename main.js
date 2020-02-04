const express = require('express')
const app = express()
app.set('view engine', 'ejs')
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/json',function(req,res){
  res.json({ user: 'arkenidar' })
})
app.get('/template', function(req,res){
  res.render('time.ejs', {time: new Date().toDateString()})
})
app.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
})
var quiz_set_1=[
  ["does a star emit light?",["yes","no"],0],
  ["is a human always right?",["yes","no"],1]
  ]
app.get('/quiz/questions', function(req,res){
  res.render('quiz_questions.ejs',{set:quiz_set_1})
})
app.post('/quiz/answers', function(req,res){
  res.render('quiz_answers.ejs',{set:quiz_set_1,query:req.body})
})
app.listen(3000)