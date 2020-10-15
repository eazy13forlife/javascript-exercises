const leapYears = function(year) {
  //create a variable called yesLeap and set equal to true;
  const yesLeap=true;
  //create a variable called noLeap and set equal to false;
  const noLeap=false
  //if year is divisible by 100(remainder of 0)
  if(year%100===0){
    //check to see if divisible by 4 also. If it is, return yesLeap
    if(year%4===0){
      return yesLeap;
    //if not divisible by 4, return noLeap
    }else{
      return noLeap;
    }
  //if year is not divisble by 100, check to see if divisible by 4. no remainders.
  }else if(year%4===0){
    return yesLeap;
  //if year is not divisble by 100 or 4, then it is not a leap year, so return noLeap
  }else{
    return noLeap;
  }
}
console.log(leapYears(1900));

module.exports = leapYears
