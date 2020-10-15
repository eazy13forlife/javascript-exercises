/*
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
*/
const leapYears=(year)=>{
  const yesLeap=true;
  const noLeap=false;
  //if year is divisible by 4, check to see if it is also divisible by 100
  if(year%4===0){
    //if year is  divisible by 4 AND 100, check to see if also divisble by 400
    if(year%100===0){
      //if year is divible by 4 AND 100 AND 400, then yes leapYear
      if(year%400===0){
        return yesLeap;
      //if year is divisible by 4 AND 100 but not 400, then it is not leap year
      }else{
        return noLeap;
      }
    //if year is divisble by 4 but not disible by 100, then it is a leapYear
    }else{
      return yesLeap
    }
  //if year not divisible by 4, return noLeap
  }else{
    return noLeap
  }
}
console.log(leapYears(1900));

module.exports = leapYears
