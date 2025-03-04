const express = require('express');
const { AirportMiddlewares } = require('../../middlewares')

const {AirportController} = require('../../controllers')

const router = express.Router();


router.post('/',AirportMiddlewares.validateCreateRequest,AirportController.createAirport)


router.get('/:id',AirportController.getAirport)
router.get('/',AirportController.getAirports)

router.delete('/:id',AirportController.destroyAirport)



module.exports = router