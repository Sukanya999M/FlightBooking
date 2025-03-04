const CrudRepository = require('./crud-repositories')

const {Airport} = require('../models')

class AirportRepository extends CrudRepository{
    constructor(){
        console.log(Airport)
        super(Airport)
    }
}

module.exports = AirportRepository