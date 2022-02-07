const inquirer = require('inquirer');


inquirer.prompt([
    {
        name: 'p1',
        massage: "First val:"
    },
    {
        name: 'p2',
        message: "Second val:"
    }
]).then((answers) =>{
    console.log(answers)
    v1 = (parseInt( answers['p1']) + parseInt(answers['p2']))/2
    console.log('media:', v1)
}).catch((err) => console.log(err))