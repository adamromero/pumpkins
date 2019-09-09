const express = require('express');
const router = express.Router();

router.get('/photos', (req, res) => {
	db.query(`SELECT gallery_id, image_file, name, year 
				FROM gallery INNER JOIN image
				ON gallery.image_id = image.image_id
				ORDER BY year DESC`, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: result
			});
		}
	});
});

router.post('/photos/new', (req, res, next) => {
	
});

router.get('/photos/:photo_year?', (req, res) => {
	db.query(`SELECT * FROM image WHERE year = ${req.params.photo_year}`, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: result
			});
		}
	});
});

/*Login Page*/
router.get('/login', function(req, res) {
	let error = "";
	if (req.query.status === "error") {
		error = "Incorrect Username and/or Password";
	} else if (req.query.status === "empty") {
		error = "Please enter Username and Password";
	}
	if (!req.session.loggedin) {
		res.render('login', {
			page: "- Login Page",
			error: error
		});
	} else {
		res.redirect("/admin");
	}
});

router.post('/auth', function(req, res) {
	req.getConnection(function(err, connection) {
		if (err) {
			return next(err);
		}

		let username = req.body.username;
		let password = req.body.password;
		if (username && password) {
			connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
				if (results.length > 0) {
					req.session.loggedin = true;
					req.session.username = username;
					res.redirect('/admin');
				} else {
					res.redirect('/login?status=error');
				}			
				res.end();
			});
		} else {
			res.redirect('/login?status=empty');
			res.end();
		}
	});
});

router.post('/logout', function(req, res) {
	const data = req.body;
	if (req.session.loggedin) {
		req.session.loggedin = false;
	}
	res.redirect("/login");
});

/*Admin Page*/

router.get('/admin', function(req, res, next) {
	if (req.session.loggedin) {
		res.render('admin', {
			page: "- Admin Page"
		});
	} else {
		res.redirect("/login");
	}
});


module.exports = router;