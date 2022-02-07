const fs = require('fs'); // Módulo para gerenciar arquivos

const file_name = 'merda.txt'

fs.readFile(file_name, 'utf-8', (err, data) =>{
    if(err){
        console.log("Error to open "+file_name)
    }else{
        console.log(data)
    }
})