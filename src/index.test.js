import stringLength from './index.js';

test('function returns a string length if string length is between 1 and 10', () => {
  const myString = 'hello';
  const strLength = myString.length;
  expect(stringLength(`${myString}`)).toBe(strLength);
});