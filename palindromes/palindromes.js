
const palindromes=(word)=>{
  //create an empty redoneWord string. If you don't put the empty strings, then it says undefined, instead of nothing;
  let redoneWord="";
  //create an alphabet variable that equals all of the letters in the alphabet
  let alphabet="abcdefghijklmnopqrstuvwxyz1234567890";
  //create an array of all the letters in the alphabet variable
  const alphabetArray= alphabet.split("");
  console.log(alphabetArray);
  //create an array of all the items in our word
  const wordArray=word.toLowerCase().split("");
  //for each item in our word Array(the first for loop), we want to check if it is included in our 26 letter alphabet array(the second for loop). If it is, we add that item to our redoneWord string.
  outer:for(let i=0;i<=wordArray.length-1;i++){
    inner:for(let j=0;j<=alphabetArray.length-1;j++){
      //if the letter in our word array equals a letter in the alphabet array
      if(wordArray[i]===alphabetArray[j]){
        //add that letter to our redoneWord variable
        redoneWord+=wordArray[i]
        //also,just continue with the next iteration of our outer loop. if we don't put an else statement, the inner loop will continue until its finished, before the outer loop continues. But we don't want that because we know if a letter from our wordsArray is included in the alphabets array, that is all we all loooking for. We can move on
        continue outer;
      }
    }
  }
  console.log(redoneWord)
  //split redoneWord into an array of all the letters and reverse the ordering and then join them back again.now we can compare redoneWord with reverseRedoneWord;
  const reverseRedoneWord=redoneWord.split("").reverse().join("");
  return reverseRedoneWord===redoneWord;
}

module.exports = palindromes
