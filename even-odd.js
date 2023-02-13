function evenOrOdd(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return  true;
    }
    else {
        return false;
    }
}

const herNumber = 897;
const herNumberIsEven = evenOrOdd(herNumber)
console.log(herNumberIsEven)