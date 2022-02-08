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

var data

function getData(request, response, next) {
    const response_data = db.getAll()

    response_data.then(solution=>{
        data = solution
        next()
    })
}

app.use(getData)

app.get("/all",(request, response)=>{
    
    response.send(data).status(200)
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})