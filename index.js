var express = require('express')
var options = require('./util/options')

var app = express()
var server = app.listen(options.port, function () {
  var port = server.address().port
  console.log('Simple-Server listening on port', port)
})

app.get('/', function (req, res) {
  res.send('Yes hello this is Simple-Server')
})

app.get('/lol', function (req, res) {
  res.status(404).send('no jokes')
})

app.get('/fun', function (req, res) {
  res.status(503).send('does not compute')
})

app.get('/wait', function (req, res) {
  
})
