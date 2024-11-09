const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('<h1> ISIMM 24/25 : ING2 TD1</h1><h3> CODE UPDATED ONCE MORE! Los geht\'s 2!</h3>')
});

app.listen(8080, ()=>{
	console.log("Listening on port 8080");
});
