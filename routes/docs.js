var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const docUrl = 'http://localhost:9870/TtimiServer/ttimi/listdocs?viewId=all_documents';

var funcs = {};

funcs.getDocs = function(url) {
  router.get('/', function(req, res, next) {
	try {
		fetch(url)
		  .then(function(response) {
			  console.log('in then');
			  response.json()
			    .then(function(data) {
		          console.log('data: '+JSON.stringify(data));
                  res.render('./partials/docs', data);
				});
		  });
		;
	} catch (error) {
		throw error;
	}
  });
};
exports.router = router;
exports.funcs = funcs;