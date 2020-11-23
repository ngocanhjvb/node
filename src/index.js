const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const exphbs  = require('express-handlebars');
const path = require('path');


app.use(express.static(path.join(__dirname,'public')))
// HTTP logger
app.use(morgan('combined'))

// Template engine

app.engine('hbs', exphbs({extname: '.hbs'}));

app.set('views', path.join(__dirname,'resources','views'));

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
