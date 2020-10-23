const add= (...numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals 0) and add it to the current number we're on.
		return totalAccumulated+number
	},0)
}

const subtract= (...numbers)=> {
	return numbers.reduce((total,number,index)=>{
	//if we are not on the first number(so we are not on index=0) of our numbers array, for each number in our numbers array, start by beginning with the total value(which initially equals the first number in our numbers array) and subtract it from the current number we're on. So, the 0 index won't run any code, but the first index will be the first number-second number=value. the second index will be value-third number and so on.
		if(index!==0){
			return total-number
		}
	},...numbers[0])
}


const sum=(numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals 0) and add it to the current number we're on.
		return totalAccumulated+number
	},0)
}

const multiply= (numbers)=>{
	return numbers.reduce((totalAccumulated,number)=>{
		//for each number in our numbers array, start by beginning with the  totalAccumulated value(which initially equals 1 because 1 times the first number will give us the first number back, which is what we want) and multiply the totalAccumulated to the current number we're on.
		return totalAccumulated*number
	},1)
}

const power= (...numbers)=>{
	//we want our initial value to be equal to the first number in our numbers array. This means we will start running our reduce code from the second number(first index) in our array.That way, we can just raise that first number(our initial value) to the power of the second number, which will give us a new accumulated value and then we raise that number to the number we are currently on in our array.
	return numbers.reduce((total,number,index)=>{
		if(index!==0){
			return total**number
		}
	},...numbers[0])
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
