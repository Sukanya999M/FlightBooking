const {AirplaneRepository} = require('../repositories')

const airplaneRepository = new AirplaneRepository();

async function  createAirplane(data) {
    try{
        const airplane = await airplaneRepository.create(data)
        //console.log(airplane)
        return airplane

    }catch(error){
        throw error;
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }catch(error){
        throw error;
    }
}

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        return airplane;
    }catch(error){
        throw error;
    }
}

async function  destroyAirplane(id) {
    try{
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    }catch(error){
        throw error;
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}