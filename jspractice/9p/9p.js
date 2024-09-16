

const factorial =(num)=>{
  let fact=1;
  if(num==0){
    return 1;
  }
   for (let index = 1; index <= num; index++) {
    fact =fact*index;
    
   }

   return fact;

}



console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));