const {AirportRepository} = require('../repositories')

const airportRepository = new AirportRepository();

async function  createAirport(data) {
    try{
        const airport = await airportRepository.create(data)
        //console.log(airport)
        return airport

    }catch(error){
        throw error;
    }
}

async function getAirports(){
    try{
        const airports = await airportRepository.getAll();
        return airports;
    }catch(error){
        throw error;
    }
}

async function getAirport(id){
    try{
        const airport = await airportRepository.get(id);
        return airport;
    }catch(error){
        throw error;
    }
}

async function  destroyAirport(id) {
    try{
        const airport = await airportRepository.destroy(id);
        return airport;
    }catch(error){
        throw error;
    }
}

module.exports={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport
}