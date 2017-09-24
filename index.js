var express = require('express')
var app = express()
   
app.get('/verify', function (req, res) {

  console.log('============= /verify ===========')
  console.log(req.headers)

  var valueToken = '';
  if (req.headers['x-reference-token'] === 'validToken') {
    valueToken = 'sampleValueToken'
  }
  res.header('X-Value-Token', valueToken)
  res.send('Verification Done');
})

app.get('/private', function (req, res) {
  console.log('============= /private ===========')
  console.log(req.headers);

  if (req.headers['x-value-token'] === 'sampleValueToken') {
    res.send("You have access to Private Resource!");
  } else {
    res.send(401);
  }
  
})
 
app.listen(10082)
