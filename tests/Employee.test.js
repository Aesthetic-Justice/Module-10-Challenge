const Employee = require(`../lib/Employee`);

const employeeTest = new Employee(`John`,`117`,`JohnHalo@UNSC.gov`);

test(`returns name`,() => {
    expect(employeeTest.getName()).toBe(`John`);
})

test(`returns id`,() => {
    expect(employeeTest.getId()).toBe(`117`);
})

test(`returns email`,() =>{
    expect(employeeTest.getEmail()).toBe(`JohnHalo@UNSC.gov`);
})

test(`returns role`,()=>{
    expect(employeeTest.constructor.name).toBe(`Employee`);
})