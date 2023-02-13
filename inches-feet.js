function inchesToFeet (inches){
    const feet = inches / 12 ;
    return feet;
}
const myInches = 144;
const myFeet = inchesToFeet(myInches) 
console.log('my feet', myFeet)
const herInches = 188;
const herFeet = inchesToFeet(herInches)
console.log('her feet', herFeet)