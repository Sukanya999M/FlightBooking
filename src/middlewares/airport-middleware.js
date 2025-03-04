const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
//console.log(StatusCodes)
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = 'Something wrong while creating airport'
        ErrorResponse.error = {Details:'name not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = 'Something wrong while creating airport'
        ErrorResponse.error = {Details:'airport code not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = 'Something wrong while creating airport'
        ErrorResponse.error = {Details:'city id not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}
module.exports = {validateCreateRequest}