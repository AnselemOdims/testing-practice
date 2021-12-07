// function returns string length or error
const stringLength = string =>  string.length >= 1 && string.length <=10 ?  string.length : 'Error: Not length not btw 1 and 10'

//function reverses a string
const reverseString = string => string.split('').reverse().join('')

//capitalize string
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

module.exports = {stringLength, reverseString, capitalize}