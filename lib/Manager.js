const Employee = require(`./Employee`);

class Manager extends Employee{
    officeNumber;

    getRole(){
        return this.constructor.name;
    }
}

module.export = Manager;