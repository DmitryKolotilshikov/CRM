const express = require('express');
const bodyParser = require('body-parser'); // пакет body-parser для того чтобы express понимал JSON
const cors = require('cors')// чтобы обрабатывать cors запросы, если клиент на другом домене, наш сервер ответит
const morgan = require('morgan')// чтобы красиво логировать определенные запросы, чтобы смотреть что происходит с сервером в данный момент
const authRoutes = require('./routes/auth'); 
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;