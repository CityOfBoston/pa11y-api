var jsonfile = require('jsonfile')

var file = './config/production.json'
var obj = {
	"database": process.env.MONGOLAB_URI,
  "host": "0.0.0.0",
	"port": process.env.$PORT,
	"cron": "0 30 0 * * *"
}

jsonfile.writeFile(file, obj, function (err) {
  console.log(file)
})
