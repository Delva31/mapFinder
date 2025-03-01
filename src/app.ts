const express = require('express');
const anemenityRoutes = require('./routes/amenity');
const anemenityTypeRoutes = require('./routes/amenityType');

const app = express();

// data base WIP
//connectDB();

// Middleware JSON
app.use(express.json());

// routes
app.use('/api/anenity', anemenityRoutes);
app.use('/api/anenityType', anemenityTypeRoutes);

module.exports = app;