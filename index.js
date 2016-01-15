var http = require('http')
var https = require('https')
var express = require('express')
var options = require('./util/options')

var app = express()

var http_port = options.http

console.log('creating http server on', http_port)

http.createServer(app).listen(http_port, function () {
  console.log('Simple-Server listening for http requests on port', http_port)
})

// if (options.ssl !== 'false') {
//   var ssl

//   try {
//     ssl = require('./ssl')
//   } catch (e) {
//     console.log('failed to read ssl info:\n', e)
//   }

//   if (ssl) {
//     console.log('use ssl!')
//     var ssl_port = options.ssl
//     https.createServer(ssl, app).listen(ssl_port, function () {
//       console.log('Simple-Server listening for https requests on port', ssl_port)
//     })
//   }
// }

app.use(express.static('public'))

// app.get('/', function (req, res) {
//   res.send('Yes hello this is Simple-Server')
// })

// app.get('/lol', function (req, res) {
//   res.status(404).send('no jokes')
// })

// app.get('/fun', function (req, res) {
//   res.status(503).send('does not compute')
// })

// app.get('/wait', function (req, res) {

// })
