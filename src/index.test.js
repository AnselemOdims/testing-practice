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
describe('reverse string function', () => {
  const myString = 'Hello World';

  test('returns right value', ()=> {
    expect(reverseString(myString)).toBe('dlroW olleH')
  })
  
  test('returns empty string', ()=> {
    const myString = '';
    expect(reverseString(myString)).toBe('')
  })
  
  test('returns right value', ()=> {
    const myString = 'Hello';
    expect(reverseString(myString)).toBe('olleH')
  })
  
  test('does not return wrong value', ()=> {
    expect(reverseString(myString)).not.toBe('dlroWolleH')
  })
  
  test('returns a string type', ()=> {
    expect(typeof(reverseString(myString)) === 'string').toBeTruthy()
  })
})
