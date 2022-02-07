const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const chalk = require('chalk');

const port = 3000

const server = http.createServer((req, res) =>{

    //const address = url.parse(req.url, true)
    //const fileName = address.pathname.substring(1)
    let content = ""
    let code = 200

    fs.readFileSync("menu.html" ,function(err, data){
        content = data
    })



    res.writeHead(code,{'Content-Type': 'text/html'})
    res.write(content)
    return res.end()
       

})


server.listen(port, ()=>{
    console.log(chalk.bgRed.white("\t\t      Server Running      "))
})