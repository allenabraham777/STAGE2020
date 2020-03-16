var express = require("express");
var icrtseContrller = require('./controllers/stageController')
var app = express();

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 80);

//Set up template Engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));


//Fire Controllers
icrtseContrller(app);


//listen to port
app.listen(app.get('port'));
console.log(app.get('port'));
