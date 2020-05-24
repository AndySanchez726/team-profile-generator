const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeArr = [];

function Prompt() {

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
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEntry}) => {
                        employeeArr.push(new Manager(employee, id, email, office))
                        console.log(employeeArr)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEntry}) => {
                        employeeArr.push(new Engineer(employee, id, email, github))
                        console.log(employeeArr)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEntry}) => {
                        employeeArr.push(new Intern(employee, id, email, school))
                        console.log(employeeArr)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            }

        })

}

Prompt();
