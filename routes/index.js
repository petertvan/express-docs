var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const docUrl = 'http://localhost:9870/TtimiServer/ttimi/listdocs?viewId=all_documents';

/* GET home page. */
router.get('/', function(req, res, next) {
	try {
		fetch(docUrl)
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

module.exports = router;
