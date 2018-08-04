const functions = require('./functions');

//toBe is for primitives
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

//find what it should NOT be
test('Adds 2 + 2 to NOT equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY AND FALSEY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruth matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});


// this should work with 0, null, undefined, false
test('Should be falsy', () => {
  expect(functions.checkValue(false)).toBeFalsy();
});


//toEqual is for arrays, objects
test('User should be Joe Schafer object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Joe',
    lastName: 'Schafer'
  });
});


// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});


// or Equal
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in Team', () => {
  expect('team').not.toMatch(/I/i);
});

//Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});


