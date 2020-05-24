const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function Prompt() {
    this.manager;
    this.engineer;
    this.intern;

    inquirer
        .prompt({
            type:'list',
            name: 'role',
            message: 'What is the team members role?',
            choices: ['Manager', 'Engineer', 'Intern']
        })
        .then(({role}) => {
            if (role === 'Manager') {
                inquirer
                    .prompt([{
                        type:'text',
                        name:'name',
                        message:"What is the Manager's name?"
                    },
                    {
                        type:'text',
                        name:'id',
                        message:"What is the Manager's employee ID number?"
                    },
                    {
                        type:'text',
                        name:'email',
                        message:"What is the Manager's email address?"
                    },
                    {
                        type: 'text',
                        name:'office',
                        message:"What is the Manager's office number?"
                    }])
                    .then(({name,id,email,office}) => {
                        this.manager = new Manager(name, id, email, office)
                        console.log(this.manager)
                    })
            }
        })
}

Prompt();