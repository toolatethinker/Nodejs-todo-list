const express = require('express');
//const process = require('process');

let todoController = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.use('/assets', express.static('/assets'));

todoController(app);

console.log(process.env.PORT);
app.listen(process.env.PORT || 3000);

console.log("Listening to 3000")