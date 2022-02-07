/*
* npm install express
* npm install yarm
* yarm add nodemon
* package/script -> "start": "yamn nodemn index.js"
*/

import Express from "express"
// package -> "type": "module"

const app = Express()

const port = 3000

app.get("/", (request, response) =>{

    response.send("Olá mundo")

})


app.listen(port, ()=>{
    console.log(`Server running on ${port} port`)
})
