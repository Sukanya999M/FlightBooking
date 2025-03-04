const {StatusCodes} = require('http-status-codes')

const {AirplaneService} = require('../services')


/**
 * POST : /airplanes
 * req body {modelNumber : "airbus367" , capacity: 200}
 * 
 */

async function createAirplane(req, res){
    try{
        console.log("in controller layer")
        //console.log(AirplaneService);
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity:req.body.capacity
        })
        console.log("main service call done")

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully created airplane',
            data :airplane,
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

async function getAirplanes(req,res){
    try{
        const airplanes = await AirplaneService.getAirplanes();
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully fetched all airplanes data',
            data :airplanes,
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

async function getAirplane(req,res){
    try{
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully fetched all airplanes data',
            data :airplanes,
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

async function destroyAirplane(req,res){
    try{
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully deleted airplane data',
            data :airplanes,
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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}