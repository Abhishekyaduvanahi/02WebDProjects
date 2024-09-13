// find the longest word i a string 
 

const findTheLongest =(str)=>{
  try{
    console.log(str);
  }
  catch(error){
    console.log("Hello ,David I am error " ,error);
  }
   if(str.trim().length===0 ){
      return false

   }
    words =str.split(" ");
   words=words.sort((a,b)=>a.length-b.length);// according to unicode it get shortlisted
   console.log(words)
    
  return words.at(-1);
  // const words =str.split(" ");

   
}

try{
  console.log(
    findTheLongest("I am the best i can do Whatever I want to do ")
  )

}catch(err){
  console.log("Hello this is an error",err);
  }
