const {StatusCodes} = require('http-status-codes')

const {CityService} = require('../services')
const city = require('../models/city')


/**
 * POST : /cities
 * req body {name :London}
 * 
 */

async function createCity(req, res){
    try{
        const city = await CityService.createCity({
            name : req.body.name
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully created airplane',
            data :city,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while creating city',
            data:{},
            error:error

        })
    }
}

module.exports={
    createCity
}