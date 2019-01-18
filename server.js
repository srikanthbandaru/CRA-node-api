const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.text({ extended: true }));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

const donationOptions = [50, 75, 100, 150, 250];

app.get('/api/donationOptions', async (req, res) => {
	res.send(donationOptions);
});

app.post('/api/donate', async (req, res) => {
	try {
    const request = JSON.parse(req.body);
  }
  catch (err) {
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));