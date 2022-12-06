//base packages
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const makePage = require(`./src/buildSite`);
const path = require(`node:path`);
const filePath = path.join(__dirname, `dist\\page.html`);

//Employee types
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

async function questionLoop() {
        const newRole = await inquirer
            .prompt({
                type: `list`,
                message: `Do you wish to add new members to the team, or are you finished?`,
                choices: [`Engineer`, `Intern`, `Finish`],
                name: `role`
            })
            .then((result) => {
                switch (result.role) {
                    case `Engineer`:
                        return questionEngineer;
                    case `Intern`:
                        return questionIntern;
                    case `Finish`:
                        return -1;
                    default:
                        console.log(`ALERT:Employee Role question has malfunctioned.`)
                        break;
                };
            })

        if (newRole === -1) { 
            fs.writeFile(filePath, makePage(EmployeeRegister), (err) => err ? console.error(err) : console.log("Success!")); 
            return;
        };

        const newEmployee = await inquirer.prompt(newRole)
            .then((result) => {
                if (newRole == questionEngineer) { console.log(`QUESTION ENGINEER`) };
                if (newRole == questionIntern) { console.log(`QUESTION INTERN`) };
                if (newRole == questionEngineer) {
                    EmployeeRegister.push(new Engineer(result.name, result.id, result.email, result.github));
                } else if (newRole == questionIntern) {
                    EmployeeRegister.push(new Intern(result.name, result.id, result.email, result.school));
                };
                return true;
            })

    if(newEmployee==true){
        questionLoop();
    }
}

function main() {

    inquirer
        .prompt(questionManager)
        .then((result) => {
            EmployeeRegister.push(new Manager(result.name, result.id, result.email, result.officeNumber))
        })
        .then(() => {
            questionLoop();
        })
}

main();