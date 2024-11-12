const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todo');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todo', todoRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});