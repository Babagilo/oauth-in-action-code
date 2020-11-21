var express = require("express");
var cons = require('consolidate');
var bodyParser = require('body-parser');
var __ = require('underscore');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support form-encoded bodies (for bearer tokens)

app.engine('html', cons.underscore);
app.set('view engine', 'html');

app.get('/showheaders', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.writeHead(200, { 'Content-Type': 'text/html', 'responseURI': '/showheaders', 'location': '/showheaders' });
  res.write("<html><h1>Requesst Headers</h1>")
  res.write("<p><pre>" + JSON.stringify(req.headers, null, 2) + "</pre>");
  res.write("<p>a link /showheaders");
  res.end("</html>")
})


var server = app.listen(9999, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Target Server is listening at http://%s:%s', host, port);
});

