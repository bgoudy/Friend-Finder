var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

// reads json and shows it as a JSON object, making it easier to read
var jsonParser = bodyParser.json()

// takes urlencoded data and turns it into a JSON object
var urlEncodedParser = bodyParser.urlencoded({extended: false})


app.use(bodyParser.json({type: "application/*+json"}))

app.use(bodyParser.raw({type: "application/vnd.custom-type"}))

app.use(bodyParser.text({type: "text/html"}))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})