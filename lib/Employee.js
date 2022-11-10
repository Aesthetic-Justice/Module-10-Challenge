class Employee{
    name;
    id;
    email;
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.constructor.name;
    }
}

module.exports = Employee;