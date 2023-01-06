const express = require('express');
const http = require('http');
const https = require('https');
const cors = require('cors');

const userRoute = require("./routes/UserRoute");
const dashboardRoute = require("./routes/DashboardRoute");

const bodyParser = require('body-parser')

var app = express()

//middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/user", userRoute);

app.use("/api/dashboard", dashboardRoute);


//start http server
const httpServer = http.createServer(app);



/*
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
*/

//make the server listen on port 3000
httpServer .listen(process.env.PORT ||3000, function(){
	console.log('listening on *:3000');
});

module.exports = app;
 
console.log("------- server is running -------");