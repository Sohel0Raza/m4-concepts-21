function getOddNumbersOfArray (numbers){
    let sum = 0;
    const oddNumbers = [];
    for(var i = 0; i < numbers.length; i++){
        const index = i;
        var element = numbers[index]
       if(element % 2 !== 0){
        // console.log(index, element)
        oddNumbers.push(element)
    }
    }
    return sum;
}

const myNumbers = [19, 16, 49, 78, 66, 78, 23, 21, 57, 95, 14, 72]
const oddNumbers = getOddNumbersOfArray(myNumbers)
console.log(oddNumbers)
const oddNumbersSum = getOddNumbersOfArray(oddNumbers)
console.log(oddNumbersSum)