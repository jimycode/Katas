/* Create a function named urlEncode that will receive a 
string of words, and return that string with all of 
the whitespace characters converted to %20. If there 
is whitespace on the outside of the string, like in 
our second example above, you should only replace the
 whitespace within the 
string. */

const urlEncode = function(text) {

    let newString = " ";
    let string = text.trim()
    for (let i=0; i < string.length; i++){
      if (string[i]===" ")
        newString += "%20";
      else 
        newString+= string[i];
    }
      return newString; 
    };

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));