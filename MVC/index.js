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



const app = express()
const port = 3000

app.use(express.json())


app.get("/",(request, response)=> )