import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/digits', (req,res) => {
	var a = parseInt(req.query.a) || 0;
	var b = parseInt(req.query.b) || 0;
	res.send(`${a + b}`);
});

app.get('/surName', (req, res) => {
	
	var arr = (req.query.fullname || '').split(' ').filter((value) => {
		return value != '';
	}).map((value) => {
		return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
	});

	if (arr.length > 3 || arr.length == 0 || !arr.every((value) => { 
		return value.match(/[\d+|_|/]/g) == null; }
	)) {
		res.send('Invalid fullname');
	} else {
		if (arr.length == 3) {
			res.send(`${arr[2]} ${arr[0][0]}. ${arr[1][0]}.`);
		} else if (arr.length == 2) {
			res.send(`${arr[1]} ${arr[0][0]}.`);
		} else {
			res.send(`${arr[0]}`);
		}
	}
	
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
