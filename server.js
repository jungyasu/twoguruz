var express = require('express');
var app = express();
path = require('path');

var port = process.env.PORT || 5000;

//set ejs template engine
app.set('view engine', 'ejs');
//cd workspace/client/views
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/*', function(req, res){
	res.render('index.ejs');
});

app.listen(port, function(){
	console.log('SERVER RUNNING.... PORT: ' + port);
})