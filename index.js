const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());
app.options('*', cors());

app.get('/', (request, response) => {
	response.json({info: 'Node.js, Express, and Postgres API'});
});

app.get('/getseo/*', db.AmazonSeo);

// app.post('/getDeal', db.getCategory);


// app.post("/postDeal", db.postDeal);
// app.post("/edit", db.edit);
// app.post("/delete", db.delete);

// app.post('/createDeal', jwtauth.validate,db.checkAvailable);
// app.post('/editDeal', jwtauth.validate,db.checkAvailable);
// app.post('/deleteDeal', jwtauth.validate,db.checkAvailable);


// app.post('/leftBar', jwtauth.validate,db.checkAvailable);
// app.post('/rightBar', jwtauth.validate,db.checkAvailable);


app.listen(PORT, () => {
	console.log(`App running on port .`);
});