const express = require('express');

let todoController = require('./controllers/todoController');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

//app.use('/assets', express.static('/assets'));

todoController(app);


app.listen(3000);

console.log("Listening to 3000")