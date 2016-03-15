var jsonfile = require('jsonfile')

var file = './config/production.json'
var obj = {
	"database": process.env.MONGOLAB_URI,
	"port": process.env.$PORT,
	"cron": "0 30 0 * * *"
}

jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})
