function sumOfArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        console.log(sum)
    }
    return sum;
}

const myNumbers = [19, 16, 49, 78, 66, 78, 23, 21, 57, 95, 14, 72]
sumOfArray(myNumbers)