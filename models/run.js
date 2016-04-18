// if you want a promises interface you could use https://www.npmjs.com/package/superagent-as-promised
import request from 'superagent'
import Promise from 'promise'

function getTimestamp(){
	let promise = new Promise(function(resolve,reject){
		request.get('./v1/timestamp').end(function(err,res){
			if (err) reject(err)
			else resolve(res.text)
		})
	})
	return promise
}

// normally thee'd be an error handler of some kind
// postRunDetails (runDetails, callback)
// or just use raw superagent request and propagate the error where its used
function postRunDetails(runDetails){ 
	request
		.post('./v1/runs')
		.send(runDetails)
		.end()
}

module.exports = {
	getTimestamp: getTimestamp,
	postRunDetails: postRunDetails
}
