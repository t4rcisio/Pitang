

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const chalk = require('chalk');


readline.question("What's your name: ", (name)=>{
    console.log(chalk.red("My name's"), chalk.bgRed.white(name))
    readline.close()
})