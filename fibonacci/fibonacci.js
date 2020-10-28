const fibonacci = (number)=> {
  number=+number
  if(number<=0){
    return "OOPS";
  }else{
    let fibArray=[0,1]
    for(let i=2;i<=number;i++){
      fibArray[i]=fibArray[i-1]+fibArray[i-2];
    }
    return fibArray[number];
  }
}



module.exports = fibonacci
