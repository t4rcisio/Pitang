/*
Full project

Packages
-> npm install
    express
    yarn
    mongodb
    dotenv
<-

-> yarn add
    nodemon
<-

*/


import express from "express"
import db from "./db/conn.js"



const app = express()
const port = 3000

app.use(express.json())


app.get("/all",(request, response)=> response.send(db.getAll()))


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})