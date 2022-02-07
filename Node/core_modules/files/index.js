const fs = require('fs')
const http = require('http')
const url = require('url')
const chalk = require('chalk');



const port = 3000

const server = http.createServer((req, res) =>{

   
    page = "menu"


    fs.readFile(`${page}.html`, function(err, data){
        
        const urlInfo = url.parse(req.url, true)
        const name = urlInfo.query.name
        const defPage = data

        if(err){
            response = `<h1>404 page not found</h1><h3> /${page} not found</h3>`
            code = 404
        }else{

            if(!name){
                response = data
                code  = 200
    
            }else{
                code = 200
                fs.appendFile('file.txt', `\nusername=${name}`, function(err, data){
                    res.writeHead(302,{
                        Location: '/',
                    })
                    response = defPage
                    return res.end()
                })
            }
        }
        res.writeHead(code, {"Content-Type": "text/html"})
        res.write(response)
        return res.end()
        
        
    })  

})


server.listen(port, ()=>{
    console.log(chalk.bgRed.white("\t\t      Server Running      "))
})
