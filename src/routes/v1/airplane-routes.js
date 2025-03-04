const express = require('express');
const {AirplaneMiddlewares} = require('../../middlewares')

const {AirplaneController} = require('../../controllers')

const router = express.Router();


router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)


router.get('/:id',AirplaneController.getAirplane)
router.get('/',AirplaneController.getAirplanes)

router.delete('/:id',AirplaneController.destroyAirplane)



module.exports = router