const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express();
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 8080; //default port is 8080
//Tell our app to use bodyParser when receiving requests

const images_routes = require('./routes/images');
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});





app.use(bodyParser); // for parsing application/json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

//i need fileUpload() to send my response from my front end to my backend
//but this does not same my image file to my uplaods

app.use('/api/images', images_routes);



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});



