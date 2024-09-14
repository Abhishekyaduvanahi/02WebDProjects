//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a trianle ,the function should return a string indicating the type of triangle : "equilateral","isosceles",or "scalene" .


//Todo the function should adhere to the following rules 

//? If all three sides are of equal length , return "equilateral"
//?If only two sides are of equal length, return "isosceles"
//? If all three sides have different lengths ,return "scalene".
const checkTriangle=(a,b,c)=>{
  if(a==b && b==c)return "equilateral";
  if(a==b || b==c ||a==c)return "Iscosceles";
  return "scalene triangle"

}

console.log(checkTriangle(4,4,4));
console.log(checkTriangle(4,5,4));
console.log(checkTriangle(4,5,6));