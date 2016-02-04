var data = require("../data.json");

exports.addFriend = function(req, res) {   
	res.render('add',data);
	var name = req.query.name;
	var desc = req.query.description;
	console.log(name);
	console.log(desc);

	var friend = {
			"name": name,
			"description": desc,
			"imageURL": "http://lorempixel.com/400/400/people"			
		};
	data["friends"].push(friend);

	// Your code goes here
}