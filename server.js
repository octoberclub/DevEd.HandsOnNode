var express = require('express')
  , http = require('http');

var app = express(); 
var server = http.createServer(app);

app.get('/poem/getPoem/:text', function(req, res) {
  res.type('application/json');
  var text = req.params.text;
  console.log("Parameter: " + text);
 
	poem = new Object();
	poem.text = text;	
	poem.lines = "Violets are blue";
	
	res.json(poem);
});

app.post('/poem/:from', function(req, res) {
	var poem  = req.body;
	console.log("Got request: " + JSON.stringify(poem));
	console.log("from: " + poem.from);
	res.send(poem);		
});	
 
app.listen(process.env.PORT || 9999);

// curl -i -X GET -H 'Content-Type: application/json'  http://localhost:9999/poem/getPoem/Violets