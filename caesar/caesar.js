const caesar=(word,number)=>{
  let emptyString=""
  let letterOrderingArray=[]
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
        if(wordArray[i].toLowerCase()===letterOrderingArray[j].letter){
          //find the value associated with that letter
          const value=letterOrderingArray[j].value;
          //add that value to the number argument to get the total number we should be in our alphabet
          let totalNumber=value+number;
          //if totalNumber is greater than 26, then the new totalNumber is the old totalNumber divided by 26. The remainder will be the new totalNumber,this will allow us to continue repeat a-z/wrap around the alphabet. For example, if totalNumber is 53, then thats twice fully and one remainder, so that leaves us at letter a.
          if(totalNumber<=0){
            letterOrderingArray=[];
            for(let i=0;i<=alphabetArray.length-1;i++){
              letterOrderingArray.push({
                letter:alphabetArray[i],
                value:i-25,
              })
            }
            console.log(letterOrderingArray)
          }

          if(totalNumber>26||totalNumber<(-26)){
            totalNumber%=26
          }
          //go to our letterOrderingArray and find where the letters value property equals totalNumber
          const letterObject=letterOrderingArray.find((letter)=>letter.value===totalNumber)
          //find that letter and add it to the emptrystring
          const caesarLetter=letterObject.letter;
          //if the letter in our word array to uppercase already equals the letter in our word array, that means the letter in our word array is already uppercase. if thats the case, lets add the uppercase version of caesarletter
          if(wordArray[i].toUpperCase()===wordArray[i]){
            emptyString+=caesarLetter.toUpperCase();
          //but if letter in our word array is lowercase, let's just add the lowercase version of caesar letter, which we already have
          }else{
            emptyString+=caesarLetter
          }

          //after we added this caesarLetter to our empty string, we continue with the next iteration of our outer loop, which looks at the next word in our wordArray.
          continue outer;
        }
      }
    }
  }
  return emptyString;
}


module.exports = caesar
