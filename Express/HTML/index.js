import express from "express"
import path from "path"


const port = 3000
const app =  express()


/*
* Project location
*/
const __dirname = path.resolve() 

/*
* Templates HTML location
*/
const basepath = path.join(__dirname, 'templates')


/*
*@GET
*Get default page
*/
app.get("/", (request, response)=>{
    response.sendFile(`${basepath}/index.html`)
})


app.listen(port, ()=>{
    console.log(`Server running on ${port} port -> http://localhost:${port}`)
})
