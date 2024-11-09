const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('<h1> ISIMM 24/25: ING2 - Semestre 1</h1><h3> Let\'s see if BuildPush.yml action is setup correctly! Los geht\'s 3!</h3>')
});

app.listen(8080, ()=>{
	console.log("Listening on port 8080");
});
