const fibonacci = (number)=> {
  //make sure number is number
  number=+number
  //if number is less than or equal to 0, return OOPS from the getgo;
  if(number<=0){
    return "OOPS";
  }else{
    //create an array with two number in there, since it is not obvious how those numbers got there anyway
    let fibArray=[0,1]
    for(let i=2;i<=number;i++){
      //each consecutive item in the array is the addition of the number right before it and two numbers right before it
      fibArray[i]=fibArray[i-1]+fibArray[i-2];
    }
    return fibArray[number];
  }
}



module.exports = fibonacci
