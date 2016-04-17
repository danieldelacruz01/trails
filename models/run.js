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