const Employee = require(`./Employee`);

class Intern extends Employee{
    school;
    
    getSchool(){
        return this.school;
    }

    getRole(){
        return this.constructor.name;
    }
}

module.export = Intern;