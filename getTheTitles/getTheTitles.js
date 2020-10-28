const getTheTitles = function(array) {
  //use map method which creates a new array based on the return value of the callback function. Our callback function here looks at each book in the array and returns book.title property
  return array.map((book)=>book.title)
}
module.exports = getTheTitles;
