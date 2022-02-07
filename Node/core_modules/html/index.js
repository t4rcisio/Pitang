const fs = require('fs');
const http = require('http');

const port = 3000

const server = http.createServer((req, res) =>{
    
    fs.readFile('page.html', function(err, data){
        if(err){
            response = "<h1>Internal server Error</h1>"
        }else{
            response  = data
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(response)
        return res.end()
    })
})


server.listen(port, ()=>{
    console.log("all right")
})