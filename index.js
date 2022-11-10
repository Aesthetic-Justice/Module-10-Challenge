//base packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);

//Employee types
const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);

//Storage for the employees
const EmployeeRegister = [];

//Questions
const questionEngineer = [
    {
        type: `input`,
        message: `Please enter employee name`,
        name: `name`
    },
    {
        type: `input`,
        message: `Please enter employee ID`,
        name: `id`
    },
    {
        type: `input`,
        message: `Please enter employee Email`,
        name: `email`
    },
    {
        type: `input`,
        message: `Please enter employee Github`,
        name: `github`
    }
]

const questionIntern = [
    {
        type: `input`,
        message: `Please enter employee name`,
        name: `name`
    },
    {
        type: `input`,
        message: `Please enter employee ID`,
        name: `id`
    },
    {
        type: `input`,
        message: `Please enter employee Email`,
        name: `email`
    },
    {
        type: `input`,
        message: `Please enter employee School`,
        name: `school`
    }
]

const questionManager = [
    {
        type: `input`,
        message: `Please enter employee name`,
        name: `name`
    },
    {
        type: `input`,
        message: `Please enter employee ID`,
        name: `id`
    },
    {
        type: `input`,
        message: `Please enter employee Email`,
        name: `email`
    },
    {
        type: `input`,
        message: `Please enter employee Office Number`,
        name: `officeNumber`
    }
]

function questionLoop(){
    Promise.resolve()
        .then(() =>
            inquirer
                .prompt({
                    type: `list`,
                    message: `Please choose employee role`,
                    choices: [`Engineer`, `Intern`],
                    name: `role`
                })
                .then((result) => {
                    switch (result.role) {
                        case `Engineer`:
                            role = questionEngineer;
                            break;
                        case `Intern`:
                            role = questionIntern;
                            break;
                        default:
                            console.log(`ALERT:Employee Role question has malfunctioned.`)
                            break;
                    };
                })
        )
        .then(() =>
            inquirer
                .prompt(role)
                .then((result) => {
                    EmployeeRegister.push(result);
                })
        )
        .then(() =>
            inquirer
                .prompt({
                    type: `confirm`,
                    message: `Do you wish to continue?`,
                    name: `confirm`
                })
                .then((result) => {
                    if(result.confirm==true){
                        questionLoop();
                    }
                    else{
                        console.log(EmployeeRegister);
                    }
                })
        )
}

function main() {
    Promise.resolve()
        .then(() =>
            inquirer
                .prompt(questionManager)
                .then((result)=>EmployeeRegister.push(result))
                .then(() => questionLoop()))
}

main();