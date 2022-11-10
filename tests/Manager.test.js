const Manager = require(`../lib/Manager`);

const testManager = new Manager(`Satoshi Nakamoto`,`111371`,`SN@ShounenJump.jp`,``);

test(`returns name`,() => {
    expect(testManager.getName()).toBe(`Satoshi Nakamoto`);
})

test(`returns id`,() => {
    expect(testManager.getId()).toBe(`111371`);
})

test(`returns email`,() =>{
    expect(testManager.getEmail()).toBe(`SN@ShounenJump.jp`);
})

test(`returns role`,()=>{
    expect(testManager.constructor.name).toBe(`Manager`);
})