import {stringLength, reverseString} from './index.js';

describe('stringLength function', ()=> {
  const myString = 'hello';
  const strLength = myString.length;

  describe('Valid tests', ()=> {
    test('returns a string length if string length is between 1 and 10', () => {
      expect(stringLength(`${myString}`)).toBe(strLength);
    });
    
    test('returns a number if string length is between 1 and 10', () => {
      expect(typeof(stringLength(`${myString}`)) === 'number').toBeTruthy();
    });
    
    test('returns a number if string length is between 1 and 10', () => {
      expect(typeof(stringLength(`${myString}`)) === 'number').not.toBeFalsy();
    });
    
    test('returns a string length if string length is between 1 and 10', () => {
      expect(stringLength(`${myString}`)).not.toBeNull();
    });
    
    test('returns a string length if string length is between 1 and 10', () => {
      expect(stringLength(`${myString}`)).toEqual(5);
    });
  })
  
  
  describe('Not valid tests', ()=> {
    const myString = 'Hello World';
    const error = 'Error: Not length not btw 1 and 10';

    test('returns an error if string length is not between 1 and 10', () => {
      expect(stringLength(`${myString}`)).toBe(error);
    });
    
    test('returns an error if input is an empty string', () => {
      const myString = '';
      expect(stringLength(`${myString}`)).toBe(error);
    });
    
    test('returns an error if input is an empty string', () => {
      expect(typeof(stringLength(`${myString}`)) === 'string').toBeTruthy();
    });
    
    test('returns an error if input is an empty string', () => {
      expect(stringLength(`${myString}`)).not.toBeNull();
    });
  })
})


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