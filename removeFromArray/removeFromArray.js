
const removeFromArray=(originalArray,...things)=>{
  //we will create a for loop. we want to go through every item in our originalArray and find the index where an item there equals an item, i in our things array. We want to start from index 0 of the things array and work our way up to the last index of the things array. If condition is true, we increment things by 1.
  for(let i=0;i<=things.length-1;i++){
    //look at our originalArray and find the index where an item in that originalArray equals the [i] (0,1,2,3...etc) item in the things array. Store that index in the variable index.
    const index=originalArray.findIndex((item)=>item===things[i]);
    //if that index exists, remove that item from our originalArray using splice method.
    if(index>-1){
       originalArray.splice(index,1);
    //if the index doesnt exist, continue to the next iteration, which will continue looking to see if an item in the originalArray matches the [i] item the things array
    }else{
      continue
    }
  }
  //return the array
  return originalArray;
}
console.log(removeFromArray(["cat","dog","apple"],"cat","apple"));
module.exports = removeFromArray
