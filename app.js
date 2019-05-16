const express = require ('express');

const app = express();
const port = 3000;
const path= require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
let books = [];

app.use(bodyParser.json())
app.use (cookieParser ())

app.all ('/hello', (req, res) => {
	res.send('Hello World');
});

app.all ('/bye', (req,res) => {
res.send('Bye, Bye');
});

app.use('/assets', express.static(path.join(__dirname, 'assets')))


app.get('/liz', (req, res)=> {
	res.status(266). send ("hola liz")
});

app.post('/trabajo', (req, res)=> {
	res.status(266). send ({foo:"indat"});
})

app.all ('*', (req, res, next) => { 
	console.log ('liz hizo like a ', req.path)
	next() 
	});

app.all ('*', (req, res, next) => { 
	console.log ('Podria ser que esté en ', req.path)
	next() 
	});

app.patch('/partyhard', (req, res)=> {
	res.status(401). send ("errorazo 401")
});

app.get('/casita', (req,res)=>{ 
	res.send ("Aqui va todo lo que se usará");
	});

app.get('/casita', (req,res)=>{ 
	res.send ("no hay lugar como el hogar");
	});


app.get('/books', (req, res) => {
console.log( req.cookies);
res.status(200).send({data:books});
	})

app.post ('/books', (req, res) => {
console.log (req.body);

	if (req.body.book && req.body.author) {
		books.push(req.body);
		res.status(201).send ("ya quedo");
	} else {
		resp.status (400).send ({error: "you need to pass book and author"})
	}
})



app.listen(port, () => console.log ('el servidor esta corriendo'));	


