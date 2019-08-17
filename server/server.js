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
const db = mysql.createConnection({
	host     : keys.DB_HOST,
	user     : keys.DB_USER,
	password : keys.DB_PASSWORD,
	database : keys.DB_DATABASE
});

//CONNECT
db.connect( (err) => {
	if(err) throw err;
	console.log('MySQL Connected...');
});


app.get('/photos', (req, res) => {
	db.query(`SELECT image_id, image_file, name, year 
				FROM image INNER JOIN collection 
				ON collection.collection_id = image.collection_id
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

/*
app.get('/photos', (req, res) => {
	db.query(`SELECT * FROM collection ORDER BY year DESC`, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: result
			});
		}
	});
});*/

app.get('/photos/:photo_year?', (req, res) => {
	console.log(req.params.photo_year);
	db.query(`SELECT image_id, image_file, name, year 
				FROM image INNER JOIN collection 
				ON collection.collection_id = image.collection_id
				WHERE year = ${req.params.photo_year}`, (err, result) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: result
			});
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})