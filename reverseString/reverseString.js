const reverseString = (string)=> {
  //create a word variable equal to nothing for now
  let word="";
  //split our string into an array and store it in String Array
  const stringArray=string.split("");
  //run a for loop. We will begin with the last item in our array, the count down till we hit 0.
  for(let i=stringArray.length-1; i>=0;i--){
    //for every i, find that item in our string Array using bracket notation and append to our word variable
    word+=stringArray[i]
  }
  //return the word variable
  return word;
}
console.log(reverseString("mike"))
module.exports = reverseString
