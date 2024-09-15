// write a function to determine a given string is a palindrome or not . A palindrome is a word , phrase , number , or other sequence of characters that reads the same forward and backward ignoring spaces punctuation and capitalization.

const isPalindrome =(str)=>{
  str=str.toLowerCase().replace(/\W/g,"");
  let rstr=str.split("").reverse().join("")
  console.log(rstr);
  return str ===rstr ? true:false;
}

// Note 

// .replace



console.log(isPalindrome("A man, a plan, a canal,Panama")); //output true
console.log(isPalindrome("racecar")) //true
console.log(isPalindrome("hello")); //false

