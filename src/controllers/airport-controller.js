const {StatusCodes} = require('http-status-codes')

const {AirportService} = require('../services')


async function createAirport(req, res){
    try{
        const airport = await AirportService.createAirport({
            name :req.body.name,
            code : req.body.code,
            address :req.body.address,
            cityId : req.body.cityId
        })

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully created airplane',
            data :airport,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while creating airplane',
            data:{},
            error:error

        })
    }
}

async function getAirports(req,res){
    try{
        const airports = await AirportService.getAirports();
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully fetched all airplanes data',
            data :airports,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while getting airplanes details',
            data:{},
            error:error

        })
    }
}

async function getAirport(req,res){
    try{
        const airport = await AirportService.getAirport(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully fetched all airplanes data',
            data :airport,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while getting airplanes details',
            data:{},
            error:error

        })
    }
}

async function destroyAirport(req,res){
    try{
        const airport = await AirportService.destroyAirport(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully deleted airplane data',
            data :airport,
            error:{}
        })
    }catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'Something wrong while deleting airplane',
            data:{},
            error:error

        })
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport    
}