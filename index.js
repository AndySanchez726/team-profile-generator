const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function Prompt() {
    this.manager = [];
    this.engineer = [];
    this.intern = [];

    inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                inquirer
                    .prompt({
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    })
                    .then(({office}) => {
                        this.manager.push(new Manager(employee, id, email, office))
                        console.log(this.manager[0])
                    })
            }
        })

}

Prompt();