const {FlightRepository} = require('../repositories')
const { Op } = require("sequelize");

const flightRepository = new FlightRepository();

async function  createFlight(data) {
    try{
        const flight = await flightRepository.create(data)
        return flight

    }catch(error){
        throw error;
    }
}
async function getAllFlights(query) {
    let customFilter = {};
    const endingTripTime = " 23:59:59"
    const startTripTime = " 00:00:00"
    let sortFilter = []
    if(query.trips){
        [departAId, arrivalAid] = query.trips.split("-");
        customFilter.departureAirportId  = departAId;
        customFilter.arrivalAirportId = arrivalAid
    }
    if(query.price){
        [minPrice, maxPrice]= query.price.split("-")
        //console.log(minPrice, maxPrice)
        customFilter.price = {
            [Op.between]:[minPrice, (maxPrice==undefined? 20000:maxPrice)]
        }
    }
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] :query.travellers
        }
    }
    if(query.tripDate){
        customFilter.departureTime={
            [Op.between]:[query.tripDate+startTripTime, query.tripDate + endingTripTime]
        }
    }
    if(query.sort){
        console.log(query.sort)
        const params = query.sort.split(',')
        //console.log(params)
        const sortFilters = params.map((param)=> param.split('_'))
        //console.log(sortFilters)
        sortFilter = sortFilters
    }
    //console.log(customFilter, sortFilter)
    try{
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights

    }catch(error){
        throw error;
    }
}

module.exports={
    createFlight,
    getAllFlights
}