  // The function should ignore leading and trailng whitespace when determining the longest word.

  const findLongestWord =(str)=>{
    if(str.trim().length===0){
      return false;
    }
    words =str.split(" ");
    // console.log(words);
    words =words.sort((a,b)=>a.length-b.length);
    console.log(words);
   return words.at(-1);
  }


  console.log(
    findLongestWord("Watch Thapa Technical Javascript course on youtube ")
  );