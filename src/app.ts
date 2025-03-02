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
    next();
});

// routes
app.use('/api/amenity', anemenityRoutes);
app.use('/api/amenityType', anemenityTypeRoutes);

module.exports = app;