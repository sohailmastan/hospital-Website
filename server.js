var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));
app.listen(1111, function(){
    console.log("server started on :: " + this.address().port);
});