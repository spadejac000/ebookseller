const express = require('express');
const stripe = require('stripe')('secret key');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static folder
app.use(express.static(`${__dirname}/public`))

//index route
app.get('/', (req, res) => {
  res.render('index');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
