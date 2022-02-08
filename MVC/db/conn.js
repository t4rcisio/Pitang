
import mongodb from "mongodb"
import dotenv from "dotenv"

// configure .env file 
dotenv.config() 

const urldb = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}-cluster.tosaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new mongodb.MongoClient(urldb)

const database = client.db(process.env.DATABASE)

const db ={
    async getAll () {
        const response_data = {}; 
        try{ 
            await client.connect()
            response_data = await database.collection(process.env.COLLECTION).find().toArray()
            response_data = {"status": }
        }catch{

        }
        finally{
            return response_data
            client.close()
        }
    }
}



export default db












