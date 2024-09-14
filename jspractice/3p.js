//! Task :
/*
->Write a function called countChar that takes two parameters a string and a character to count . The function should return the number of times the specified character appears in the string.

//todo constraints :- 

// ? The function should be case sensitive 
//? The function should handle both upperCase and lowerCase characters.

// The character parameter can be any printable ASCII character,

*/ let count =0;
const countChar=(str,ch)=>{
   
     array =str.split("");
     console.log(array)
      for (let index = 0; index < array.length; index++) {
       if(array[index]==ch.toUpperCase() ||array[index]==ch.toLowerCase()){
          count++;
       }
    }
    return count;
}

console.log(countChar("MissIssippi","I")); //output = 4
