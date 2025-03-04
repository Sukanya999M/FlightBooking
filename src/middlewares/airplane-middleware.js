const {StatusCodes} = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req , res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = 'Something wrong while creating airplane'
        ErrorResponse.error = {Details:'model number not in correct format'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}