const {StatusCodes} = require('http-status-codes')

const {FlightService} = require('../services')
const flight = require('../models/flight')


async function createFlight(req, res){
    try{
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully created flight',
            data :flight,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while creating flight',
            data:{},
            error:error

        })
    }
}

async function getAllFlights(req,res){
    try{
        const flights = await FlightService.getAllFlights(req.query);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully fetched all flight',
            data :flights,
            error:{}
        })

    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while fetching flight',
            data:{},
            error:error

        })
    }
}

module.exports={
    createFlight,
    getAllFlights
}