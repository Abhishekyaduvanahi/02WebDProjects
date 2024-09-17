// 11: Write a function that takes an number as input and returns the sum of its digits

//Example usage :

const sumOfDigits=(num)=>{
    //console.log(typeof num);
    let Array1=Array.from(String(num),Number);
    console.log(Array1);
    // for (let index = 0; index < Array.length; index++) {
    //    sum += Array[index];
      
    // }
    // return sum;

    return Array1.reduce((accum,curElem)=> accum+=curElem,0)
    
   }


console.log(sumOfDigits(1234));
console.log(sumOfDigits(4234));
console.log(sumOfDigits(62346));

// constraints :

//The input number will always be a positive integer.
//The input number can have multiple digits.
//The output should be the sum of all the digits in the input number

