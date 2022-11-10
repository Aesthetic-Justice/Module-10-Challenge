const Engineer = require(`../lib/Engineer`);

const testEngineer = new Engineer(`Engi`,`2`,`Engineer@2Fort.blu`,`EngineerGit`);

test(`returns name`,() => {
    expect(testEngineer.getName()).toBe(`Engi`);
})

test(`returns id`,() => {
    expect(testEngineer.getId()).toBe(`2`);
})

test(`returns email`,() =>{
    expect(testEngineer.getEmail()).toBe(`Engineer@2Fort.blu`);
})

test(`returns role`,()=>{
    expect(testEngineer.constructor.name).toBe(`Engineer`);
})

test(`returns github`,() =>{
    expect(testEngineer.getGithub()).toBe(`EngineerGit`);
})