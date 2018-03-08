var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");
var port = process.env.PORT || 5000;


var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

var server = app.listen(5000, function () {
    var port = server.address().port;
    console.log("App's server listening at http://localhost:%s", port);
});