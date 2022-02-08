
import mongodb from "mongodb"
import dotenv from "dotenv"
import CONST from "../model/CONSTANTS"


// configure .env file 
dotenv.config() 

const urldb = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}-cluster.tosaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new mongodb.MongoClient(urldb)

const database = client.db(process.env.DATABASE)
const response_data = {"status": "", "message": "", "data": ""};

const db ={
    async getAll () {
         
        try{ 
            await client.connect()
            response_data.data = await database.collection(process.env.COLLECTION).find().toArray()
            response_data.status = CONST.SUCCESSFUL
            response_data.message = ""
        }catch(error){
            response_data.status = CONST.ERROR
            response_data.message = error
        }
        finally{
            return response_data
            client.close()
        }
    }
}



export default db












