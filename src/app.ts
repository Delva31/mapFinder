const express = require('express');
const anemenityRoutes = require('./routes/amenity');
const anemenityTypeRoutes = require('./routes/amenityType');

const app = express();

// data base WIP
//connectDB();

// Middleware JSON
app.use(express.json());

app.use(function(req:any, res:any, next:any) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

// routes
app.use('/api/amenity', anemenityRoutes);
app.use('/api/amenityType', anemenityTypeRoutes);

module.exports = app;