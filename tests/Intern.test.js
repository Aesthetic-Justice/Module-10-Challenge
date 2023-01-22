const Intern = require(`../lib/Intern`);

const testIntern = new Intern(`Landon Hest`,`8459`,`Hest8459@Cadia.stands`,`ScholaProgenium`);

test(`returns name`,() => {
    expect(testIntern.getName()).toBe(`Landon Hest`);
})

test(`returns id`,() => {
    expect(testIntern.getID()).toBe(`8459`);
})

test(`returns email`,() =>{
    expect(testIntern.getEmail()).toBe(`Hest8459@Cadia.stands`);
})

test(`returns role`,()=>{
    expect(testIntern.constructor.name).toBe(`Intern`);
})

test(`returns school`,() =>{
    expect(testIntern.getSchool()).toBe(`ScholaProgenium`);
})