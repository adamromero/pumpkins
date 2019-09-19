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
app.use(express.static(path.join(__dirname,'../client/public')));

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
	if (err) throw err;
	console.log('MySQL Connected...');
});

app.get('/top_rated', (req, res) => {
	db.query(`SELECT * FROM 
				(SELECT * FROM image ORDER BY rating DESC limit 3) tmp 
			  ORDER BY rating DESC;`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

app.get('/photos', (req, res) => {
	db.query(`SELECT gallery_id, image_file, name, year 
				FROM gallery INNER JOIN image
				ON gallery.image_id = image.image_id
				ORDER BY year DESC`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

app.get('/photos_all', (req, res) => {
	db.query(`SELECT * FROM image ORDER BY year DESC`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

app.get('/photo/:id?', (req, res) => {
	db.query(`SELECT * FROM image WHERE image_id = ${req.params.id}`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

//retrieve
app.get('/photos/:photo_year?', (req, res) => {
	db.query(`SELECT * FROM image WHERE year = ${req.params.photo_year}`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

//delete
app.post('/delete/:photo_id?', (req, res) => {
	db.query(`DELETE FROM image WHERE image_id = '${req.params.photo_id}'`, (err, results) => {
		if (err) {
			throw err;
		} else {
			res.json({
				data: results
			});
		}
	});
});

//edit
app.post('/edit/:photo_id?', (req, res) => {
	const data = req.body;

	db.query(`UPDATE image 
				SET image_file = '${data.filepath}', name = '${data.name}', year = '${data.year}' 
				WHERE image_id = '${req.params.photo_id}'`, (err, results) => {
		if (err) throw err;
		res.end(JSON.stringify(results));
	});
});

//create
app.post('/photos/:photo_year?', (req, res) => {
	const data = req.body;

	db.query(`INSERT INFO image VALUES (NULL, '${data.filepath}', '${data.name}', '${data.year}', NULL)`, (err, results) => {
		if (err) throw err;
		res.end(JSON.stringify(results));
	});
	
	if (data.gallery_image) {
		db.query(`INSERT INTO gallery VALUES (NULL, (SELECT image_id FROM image WHERE image_file = '${data.filepath}'))`, (err, results) => {
			if (err) throw err;
			res.end(JSON.stringify(results));
		});
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
		if (err) {
			res.status(500).send(err)
		}
	})
})

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})