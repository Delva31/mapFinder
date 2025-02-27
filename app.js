const express = require('express');
const {getItemsAmenity} = require('./modules/src/amenity/index.js')
const {getAmenityAll} = require('./modules/src/common/index.js')
const config = require('./modules/src/config/index.js')


const app = express();

const routerAmenity = express.Router();
app.use('/api/amenity', routerAmenity);


const routerCommon= express.Router();
app.use('/api/common', routerCommon);


routerAmenity.get('/', async (req, res)=>{
    //res.header='Access-Control-Allow-Origin', '*'
    res.header(`Access-Control-Allow-Origin`, '*');
    const address = config.addressDefault;
    const radius = config.radiusDefault;
    const amenity = config.amenityDefault;
    
    const result =  await getItemsAmenity(amenity, address, radius);

    if (!result)
    {
        return res
        .status(404)
        .send(`No se encontraron items para ${amenity}`)
    }
    res.send((result));
})


routerAmenity.get('/:data', async (req, res)=>{
    //res.header='Access-Control-Allow-Origin', '*'
    res.header(`Access-Control-Allow-Origin`, '*');
    const {address, radius, amenity} = req.query;

    console.log("entro squi")
    
    const result =  await getItemsAmenity(amenity, address, radius);

    if (!result)
    {
        return res
        .status(404)
        .send(`No se encontraron items para ${amenity}`)
    }
    res.send((result));
})


routerCommon.get('/amenities', async (req, res)=>{
    res.header(`Access-Control-Allow-Origin`, '*');
    
    const result =  await getAmenityAll();

    if (!result)
    {
        return res
        .status(404)
        .send(`No se encontraron items`)
    }
    res.send((result));
})

const SERVERPORT = process.env.PORT || 3000;
app.listen(SERVERPORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto en http://localhost:${SERVERPORT}`)
})

