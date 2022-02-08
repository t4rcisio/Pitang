/*
Permite que entre a requisição e a resposta, seja executado código.
Bastate útil para verificar se o usuário está logado.

*/


import express from "express"
import path from "path"
import crypto from"crypto"


const app = express()
const port = 3000

const __dirname = path.resolve()

const basepath = path.join(__dirname, "templates")

const database_users = []
app.use(express.json())


function checkAuth (request, response, next){
    
    const {nick, password} = request.body

    if(nick && password)
        database_users.find((user)=>{
            if(user.nick == nick && user.password == password)
                console.log(user.nick, nick, user.password, password)
                next()
        })
    response.send(`User not found, creat a new user to acess -> <a href="https://localhost:${port}/api/new">Create User</a>`).status(404)
}



app.use(checkAuth)

app.get("/", (request, response) =>{
        console.log("teste")
        response.sendFile(`${basepath}/index.html`)
})


app.get("/all", (request, response)=>{

    response.send(database_users)
})


app.post("/api/new", (request, response)=>{
    
    const {name, email, cpf, nick, password} = request.body

    if(name && email && cpf && nick && password){
        const newUser = {"id": crypto.randomUUID(), name, email, cpf, nick, password}
        database_users.push(newUser)
        response.send(`User ${name} be created!`).status(200)
    }
    response.send(`Input data error`).status(300)

})


app.listen(port,()=>{console.log(`Server runnning! https://localhost:${port}`)})