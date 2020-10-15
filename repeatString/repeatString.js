
const repeatString =(string,num)=>{
  //create an empty word variable
  let word=""
  //if number is negative, immediate return negative
  if(num<0){
    return "ERROR"
  //if number is not negative, run the code inside else
  }else{
    //use a for loop, for every i,starting from one to the number argument, add the string to the word variable
    for(let i=1;i<=num;i++){
        word+=string;
    }
  }
  //return word
  return word;
}

console.log(repeatString("",4));

module.exports = repeatString
