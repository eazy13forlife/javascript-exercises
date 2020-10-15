const ftoc=(f)=>{
  const conversion=(f-32)*(5/9);
  if(conversion%1!==0){
    return conversion.toFixed(1);

  }else{
    return conversion;
  }
}
const ctof =(c)=>{
  const conversion=(c*(9/5))+32;
  if(conversion%1!==0){
    return conversion.toFixed(1);
  }else{
    return conversion;
  }
}
module.exports = {
  ftoc,
  ctof
}
