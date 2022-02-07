const minimist = require("minimist");
const math = require("../modules/my_module")



const args = minimist(process.argv.slice(2))

const number = args['fat']

if(!isNaN(number)){
    console.log(math.fat(number))
}else{
    console.log("\t\t\tSINTAX ERROR!\n\t\tUse 'node arguments {int}'\n\t\tExample: node arguments 10")
}