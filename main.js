const express = require('express')
const app = express()
app.set('view engine', 'ejs')
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.get('/', function (req, res) {
  res.send(`Hello World! <br> <a href="/quiz/questions">quiz demo</a> <br>
   <form method="post" action="/combined/some_parameter/?querystring=123">
   form demo <input name="formvar"><input type="submit" value="submit"></form>`)
})
app.post('/combined/:parameter/',function(req,res){
  res.json({
    query_querystring: req.query.querystring,
    body_formvar: req.body.formvar,
    params_parameter: req.params.parameter,
  })
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