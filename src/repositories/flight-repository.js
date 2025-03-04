const CrudRepository = require('./crud-repositories')
const {Sequelize} = require('sequelize')

const {Flight, Airplane, Airport} = require('../models')

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }

    async getAllFlights(filter, sort){
        console.log("trying to fetch data")
        const response = await Flight.findAll({
            where: filter,
            order:sort,
            include:[{
                model:Airplane,
                required:true
            },{
                model :Airport,
                required:true,
                on:{
                    col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=", Sequelize.col("Airport.code"))
                },   
            },{
                    model :Airport,
                    required:true,
                    on:{
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=", Sequelize.col("Airport.code"))
                    }
            }]
        })
        console.log("getting response from repo")
        return response
    }
}

module.exports = FlightRepository