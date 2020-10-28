let findTheOldest =(array)=>{
  //we will use a sort nethod.Firstly, if year of deah does not exist on one or the other,we will check to see which one it doesn't exist on and set a property for it.
  array.sort((a,b)=>{
    if(!a.yearOfDeath||!b.yearOfDeath){
      const today=new Date();
      if(!a.yearOfDeath){
        a.yearOfDeath=Number(today.getFullYear());
      }else if(!b.yearOfDeath){
        b.yearOfDeath=Number(today.getFullYear());
      }
    }
    //to avoid having to write yearOfDeath and yearofBirth, we will just save them in variables that are easy to remember
    const aYearsAlive=a.yearOfDeath-a.yearOfBirth;
    const bYearsAlive=b.yearOfDeath-b.yearOfBirth;
    //if b lives longer than 1, b comes first
    if(aYearsAlive<bYearsAlive){
      return 1
    //if a lives longer than b, a comes first
    }else if(aYearsAlive>bYearsAlive){
      return -1;
    }
  })
  return array[0].name;
}


module.exports = findTheOldest
