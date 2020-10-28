const add= (...numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals the first element in our array, since there is no initial value provided) and add it to the current number(which will be the second item in the array).
		return totalAccumulated+number
	})
}

const subtract= (...numbers)=> {
	return numbers.reduce((total,number,index)=>{
	//  start by beginning with the total value(which initially equals the first number in our numbers array,since there is no initial value provided) and subtract it from the current number we're on(it will automatically be the second number)
			return total-number

	})
}


const sum=(numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals 0) and add it to the current number we're on.
		return totalAccumulated+number
	},0)
}

const multiply= (numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals the first in our array since no initial value is provided) and multiply the totalAccumulated to the current number we're on(which will automatically be the second number in our array).
		return totalAccumulated*number
	})
}

const power= (...numbers)=>{
	//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals the first in our array since no initial value is provided) and power raise the totalAccumulated to the current number we're on(which will automatically be the second number in our array).
	return numbers.reduce((total,number,index)=>{
			return total**number

	})
}


const factorial=(num)=>{
	//if num===0 return 1
	if(num===0){
		return 1;
	//otherwise
	}else{
		//we declare a variable equal to 1
		let number=1;
		//for each num, the new number is the old number times i.And since i decrements by 1, we get 5*4*3*2*1 if num was 5
		for(let i=num;i>=1;i--){
			number*=i;
		}
		return number;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
