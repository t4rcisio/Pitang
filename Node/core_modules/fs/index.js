

const http = require('http');
const url = require('url');


const port = 3000

const server = http.createServer((req,res) => {

    this.local = req.url
    res.end("teste")

})


server.listen(port, () =>{
    console.log(`Server running on ${port} -> ${local}`)
})