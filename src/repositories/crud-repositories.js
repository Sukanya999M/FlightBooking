const {Logger} = require('../config')

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{

            const response = await this.model.create(data);
            return response
        }catch(error){
            Logger.error("Error while doing create")
            throw error
        }
    }
    async destroy(data){
        try{
            const response = await this.model.destroy({
                where :{
                    id: data
                }
            })
            if(!response){
                throw new Error("item not found for deletion")
            }
            return response;

        }catch(error){
            Logger.error("Error while doing destroy")
            throw error
        }
    }
    async get(data){
        try{
            const response = await this.model.findByPk(data)
            if(!response){
                throw new Error("Item not found",{
                    cause: "item not found"
                });
            }
            return response;

        }catch(error){
            Logger.error("Error while doing get ")
            throw error
        }
    }
    async getAll(){
        try{
            const response = await this.model.findAll()
            return response;

        }catch(error){
            Logger.error("Error while doing getall")
            throw error
        }
    }
    async update(id, data){
        try{
            const response = await this.model.update(data, {
                where :{
                    id: id
                }
            })
            return response;

        }catch(error){
            Logger.error("Error while doing update")
            throw error
        }
    }
}

module.exports = CrudRepository