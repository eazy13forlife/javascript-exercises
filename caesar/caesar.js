const caesar=(word,number)=>{
  let emptyString=""
  const letterOrderingArray=[]
  const alphabet="abcdefghijklmnopqrstuvwxyz"
  const alphabetArray=alphabet.split("");
  for(let i=0;i<=alphabetArray.length-1;i++){
    letterOrderingArray.push({
      letter:alphabetArray[i],
      value:i+1,
    })
  }
  console.log(letterOrderingArray);
  const wordArray=word.split("");
  console.log(wordArray)
  outer:for(let i=0;i<=wordArray.length-1;i++){
    inner:for(let j=0;j<=letterOrderingArray.length;j++){
      //if letter in our word is equal to the letter in our alphabet, which means the other 26 letters there was no match, otherwise the next iteration in our for loop would have began
      if(j===letterOrderingArray.length){
        emptyString+=wordArray[i];
      }else{
        if(wordArray[i]===letterOrderingArray[j].letter){
          //find the value associated with that letter
          const value=letterOrderingArray[j].value;
          //add that value to the number argument to get the total number we should be in our alphabet
          const totalNumber=value+number;
          //go to our letterOrderingArray and find where the letters value property equals totalNumber
          const letterObject=letterOrderingArray.find((letter)=>letter.value===totalNumber)
          //find that letter and add it to the emptrystring
          const caesarLetter=letterObject.letter;
          emptyString+=caesarLetter;
          //after we added this caesarLetter to our empty string, we continue with the next iteration of our outer loop, which looks at the next word in our wordArray.
          continue outer;
        }
      }
    }
  }
  return emptyString;
}


module.exports = caesar
