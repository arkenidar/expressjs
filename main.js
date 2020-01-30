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

app.listen(3000)
