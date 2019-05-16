const express = require ('express');


const app = express();
const port = 3000;
const path= require('path')


app.all ('/hello', (req, res) => {
	res.send('Hello World');
});

app.all ('/bye', (req,res) => {
res.send('Bye, Bye');
});

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.listen(port, () => console.log ('el servidor esta corriendo'));	


