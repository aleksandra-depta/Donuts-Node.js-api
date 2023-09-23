const express = require('express');
const productRouter = require('./routes/productRoutes')
const locationRouter = require('./routes/locationRoutes')
const orderRouter = require('./routes/orderRoutes')

const cors = require('cors');

const app = express();

app.use(cors({
  // origin:'http://localhost:3000',
  // origin:'http://127.0.0.1:8080',
  // // origin:'https://do-web-design.github.io',
  // credentials:true
}
));

app.use(express.json({ 
  limit: '10kb' 
})); 

// ROUTERS
app.use('/api/v1/products', productRouter);
app.use('/api/v1/locations', locationRouter);
app.use('/api/v1/orders', orderRouter);

module.exports = app;