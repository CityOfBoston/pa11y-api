var jsonfile = require('jsonfile')

var file = './config/production.json'
var obj = {
	"database": "mongodb://heroku_24phvj3q:7ssslcprnll7klpde1r83p7fk8@ds015939.mlab.com:15939/heroku_24phvj3q",
  "host": "0.0.0.0",
	"port": process.env.$PORT,
	"cron": "0 30 0 * * *"
}

jsonfile.writeFile(file, obj, function (err) {
  console.log(obj)
})
