const CrudRepository = require('./crud-repositories')

const {City} = require('../models')

class CityRepository extends CrudRepository{
    constructor(){
        console.log("in city repo")
        super(City)
    }
}

module.exports = CityRepository