
const { exit } = require('process');
const math = require('./my_module')

if(process.argv.length != 3){
    console.log("\t\t\tSINTAX ERROR!\n\t\tUse 'node arguments {int}'\n\t\tExample: node arguments 10");
    exit(0)
}else{
    
    number = process.argv[3]
    if(!isNaN(number)){
        console.log(math.fat(number))
    }else{
        console.log("\t\t\tINVALID ARGUMENT!\n\t\tThe argument must be Int type, like 1,5,10,13...")
    }
    

}


