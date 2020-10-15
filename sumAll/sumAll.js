const sumAll =(num1,num2)=> {
  if(num1<0||num2<0||typeof num1!=="number"||typeof num2!=="number"){
    return `ERROR`
  }
  let num=0;
  if(num1<num2){
    for(let i=num1;i<=num2;i++){
      num+=i;
    }
  }else{
    for(let i=num2;i<=num1;i++){
      num+=i;
    }
  }
  return num;
}
console.log(sumAll(-6,0));

module.exports = sumAll
