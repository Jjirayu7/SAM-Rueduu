<<<<<<< HEAD
const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');
const saleController = require('./controllers/SaleController');
const userCustomerController = require('./controllers/UserCustomerController');
const dashboardController = require('./controllers/DashboardController');
const orderController = require('./controllers/OrderController')

const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
=======
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');
const saleController = require('./controllers/SaleController');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/user', userController);
app.use('/product', productController);
app.use('/api/sale', saleController);
<<<<<<< HEAD
app.use('/user/customer', userCustomerController);
app.use('/api/dashboard', dashboardController);
app.use('/order', orderController);

app.listen(3001);

=======

app.listen(3001);
>>>>>>> 6cdc9c63e9f9b9686869ac51b9ac47b1806a73fe
