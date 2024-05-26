const express = require('express');
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql2')
const myConnection = require('express-myconnection')


const app = express();

// importing routes
const productRoutes = require('./routes/product')
const categoryRoutes = require('./routes/category')
const indexRoutes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares 
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Bender345',
    port: 3306,
    database: 'Inventory'
}, 'single'))
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);
app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

// static files
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
});