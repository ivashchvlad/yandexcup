const findLatestWeight = require('./findLatestWeight')
const old = require('./old')



var arr = []
beforeEach(() => {
    arr = [10,15,20];
    //for (i = 1000; i <= 7005; i++) arr.push(i)
});



test('shuold be ok', () => {
    expect(findLatestWeight(arr)).toBe(0);
});

test('shuold not be ok', () => {
    expect(old(arr)).toBe(0);
});