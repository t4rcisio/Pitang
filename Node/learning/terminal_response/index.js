const chalk = require('chalk');
const minimist = require('minimist');


const args = minimist( process.argv.slice(2))

const name = args['name']
const cpf = args['cpf']


console.log(chalk.red(`\t\tUSER DATA`))
console.log(chalk.blackBright(`\tName:`), chalk.green(name))
console.log(chalk.blackBright(`\tCPF:`), chalk.green(cpf))


console.log(name, cpf)