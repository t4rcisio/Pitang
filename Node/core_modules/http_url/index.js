const http = require('http');
const url = require('url');


const port = 3000

const server = http.createServer((req, res) => {

        const urlInfo = url.parse(req.url, true)
        const name = urlInfo.query.name

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')

        if (!name){
            response = `<h1>You must infor you name!</h1><form method="GET"><input type="text" name="name"></input><input type="submit" value="SEND"></input></form>`
        }else{
             response = `<h1>Wellcome back ${name}</h1>`
        }

        res.end(response)
})

server.listen(port, () =>{
    console.log('All right')
})