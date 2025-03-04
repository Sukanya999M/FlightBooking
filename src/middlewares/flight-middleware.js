const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req , res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'flight number not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'a id not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'dpt Air id not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'arr Aid not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'arr time not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'dpt time not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'price not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = 'Something wrong while creating flight'
        ErrorResponse.error = {Details:'totalsetas not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    console.log("validation is complete")
    next();
}

module.exports = {
    validateCreateRequest
}