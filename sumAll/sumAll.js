const sumAll =(num1,num2)=> {
  //if any of the conditions we don't want exist, return error right away
  if(num1<0||num2<0||typeof num1!=="number"||typeof num2!=="number"){
    return `ERROR`
  }
  let num=0;
  //if num1<num2, run the for loop below, which just adds i to num
  if(num1<num2){
    for(let i=num1;i<=num2;i++){
      num+=i;
    }
  //if num1>num2 or they are both the same, run the for loop below
  }else{
    for(let i=num2;i<=num1;i++){
      num+=i;
    }
  }
  //return num
  return num;
}
console.log(sumAll(-6,0));

module.exports = sumAll
