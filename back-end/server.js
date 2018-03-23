const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT = process.env.PORT || 8080;


const admin_routes = require('./routes/admin');
const images_routes = require('./routes/images');
const videos_routes = require('./routes/videos');

const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('uploads/images'));
app.use(express.static('uploads/videos'));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use('/api/admin', admin_routes);
app.use('/api/videos', videos_routes);
app.use('/api/images', images_routes);




app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});



