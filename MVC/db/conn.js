
import mongodb from "mongodb"
import dotenv from "dotenv"
import {SUCCESSFUL, ERROR} from "../model/CONSTANTS.js"



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
            response_data.message = ""
            response_data.status = SUCCESSFUL
        }catch(error){
            response_data.message = error
            response_data.status = ERROR
        }
        finally{
            client.close()
            return response_data
        }
    }
}



export default db












