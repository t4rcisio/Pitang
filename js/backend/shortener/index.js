import  express  from "express";
import crypto from "crypto"

import users from "./model/userModel.js"

const app = express();

app.use(express.json())
const port = 3000


/**
 * @GET
 * Get all users
 */
app.get("/api/users", (request, response)=>{
    
    response.send(users).status(200)

})

/**
 * @GET
 * Find user by cpf
 */
app.get("/api/users/search/:cpf", (request, response)=>{
    
    const cpf = request.params.cpf
    const user = users.find((user) => user.cpf == cpf)

    if(user){
        response.send(user).status(200)
    }else
        return response.send(`Check input data`).status(200)
})

/**
 * @POST
 * Create a new user
 */
app.post("/api/user/new", (request, response)=>{

    const {name, email, cpf, roles} = request.body
    if(name && email && cpf && roles){              // Verify received data before create a user

        const newUser = {"id": crypto.randomUUID(), name, email, cpf, roles}
        users.push(newUser)
        return response.send(`<h1>User ${newUser.name} be saved</h1>`).status(200)
    }
    return response.send(`Check input data`).status(200)

})

/**
 * @DELETE
 * Delete user by CPF
 */
app.delete("/api/user/delete", (request, response)=>{

    const {cpf} = request.body
    
    if(cpf){
      users.map((user, index)=>{
            if(user.cpf == cpf){
                users.splice(index,1)
               return  response.send(`<h1>${user.name} be deleted!</h1`).status(400)
            }
        })
    }
    return response.send(`Check input data`).status(200)

})


/**
 * @PUT
 * Updete user data
 */
app.put("/api/user/update", (request, response) =>{

    const {name, email, cpf, roles} = request.body

    users.map((user)=>{
        if(user.cpf == cpf && cpf ){
            // Check data before update
            user.name  =    name?  name  : user.name
            user.email =    email? email : user.email
            user.roles =    roles? roles : user.roles
            user.cpf   =    cpf

            return response.send(`User ${user.name} has be updated`).status(200)
        }
    })
    return response.send(`Check input data`).status(200)
    

})

app.listen(port, () =>{
    console.log(`server running on PORT: ${port}`)
})

/*
npm install express
inclue "type": "module"
to use "import" to import modlues

to auto reload page install library : npm install nodemon --dev


*/