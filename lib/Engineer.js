const Employee = require(`./Employee`);

class Engineer extends Employee{
    github;
    
    getGithub(){
        return this.github;
    }

    getRole(){
        return this.constructor.name;
    }
}

module.export = Engineer;