const {globalVariables} = require('./config/configuration');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongoDbUrl, PORT} = require('./config/configuration');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// mongoose to mongodb
mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(response =>{
        console.log('connected successfully');
    }).catch( response => {
        console.log('database connection failed');
    });

/* Configure express*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


// flash and session
app.use( session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

app.use(globalVariables);


// setup view engine
app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine','handlebars');

// routes
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use('/',defaultRoutes);
app.use('/admin',adminRoutes);


app.listen(PORT, () => {
    console.log('activated port 3000 ${PORT}');
})