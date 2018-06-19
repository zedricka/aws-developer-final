const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const AWS = require('aws-sdk');
const path = require('path');
const home = require('./routes/home')

app.use(bodyParser.urlencoded({extended:true}))
app.use("/public", express.static(path.join(__dirname, 'public')));

app.set('view engine', '.hbs');

app.engine('.hbs', exphbs({
  extname:'.hbs',
  defaultLayout:'main',
}))

app.use('/', home)

app.listen(PORT, () => {
    console.log(`Server started, listening on ${PORT}`);
})
