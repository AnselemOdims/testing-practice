import {stringLength, reverseString} from './index.js';

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

//Invalid tests
test('function returns an error if string length is not between 1 and 10', () => {
  const myString = 'Hello World';
  const error = 'Error: Not length not btw 1 and 10';
  expect(stringLength(`${myString}`)).toBe(error);
});

test('function returns an error if input is an empty string', () => {
  const myString = '';
  const error = 'Error: Not length not btw 1 and 10';
  expect(stringLength(`${myString}`)).toBe(error);
});

test('function returns an error if input is an empty string', () => {
  const myString = 'Hello World';
  expect(typeof(stringLength(`${myString}`)) === 'string').toBeTruthy();
});

test('function returns an error if input is an empty string', () => {
  const myString = 'Hello World';
  expect(stringLength(`${myString}`)).not.toBeNull();
});


// REVERSE A STRING FUNCTION
test('reverse a string', ()=> {
  const myString = 'Hello World';
  expect(reverseString(myString)).toBe('dlroW olleH')
})

test('reverse a string', ()=> {
  const myString = '';
  expect(reverseString(myString)).toBe('')
})

test('reverse a string', ()=> {
  const myString = 'Hello';
  expect(reverseString(myString)).toBe('olleH')
})

test('reverse a string', ()=> {
  const myString = 'Hello World';
  expect(reverseString(myString)).not.toBe('dlroWolleH')
})

test('reverse a string', ()=> {
  const myString = 'Hello World';
  expect(typeof(reverseString(myString)) === 'string').toBeTruthy()
})