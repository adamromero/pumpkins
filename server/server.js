const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const keys = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
//STATIC FOLDER
app.use(express.static(path.join(__dirname,'../client/build')));

// Body Parser Middleware
app.use(bodyParser.json());

//CREATE CONNECTION
const db = mysql.createPool({
	host     : keys.DB_HOST,
	user     : keys.DB_USER,
	password : keys.DB_PASSWORD,
	database : keys.DB_DATABASE
});

//CONNECT
db.getConnection( (err) => {
	if(err) throw err;
	console.log('MySQL Connected...');
});

app.get('/top_rated', (req, res) => {
	db.query(`SELECT * FROM 
				(SELECT * FROM image ORDER BY rating DESC limit 3) tmp 
			  ORDER BY rating DESC;`, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: result
			});
		}
	});
});

app.get('/photos', (req, res) => {
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

app.get('/photos/:photo_year?', (req, res) => {
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

app.post('/photos/:photo_year?', function(req, res) {
	const data = req.body;
	db.query(`INSERT into image VALUES (NULL, '${data.filepath}', '${data.name}', '${data.year}', NULL)`, (err, results) => {
		if (err) throw err;
		res.end(JSON.stringify(results));
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})