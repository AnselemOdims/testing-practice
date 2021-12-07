import stringLength from './index.js';

//run test if valid
test('function returns a string length if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(stringLength(`${myString}`)).toBe(strLength);
});

test('function returns a number if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(typeof(stringLength(`${myString}`)) === 'number').toBeTruthy();
});

test('function returns a number if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(typeof(stringLength(`${myString}`)) === 'number').not.toBeFalsy();
});

test('function returns a string length if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(stringLength(`${myString}`)).not.toBeNull();
});

test('function returns a string length if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(stringLength(`${myString}`)).toEqual(5);
});