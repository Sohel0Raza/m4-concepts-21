function milesToKilometer (miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}
const dhakaToKhulnaMiles = 80;
const dhakaToKhulnaKilometer = milesToKilometer(dhakaToKhulnaMiles)
console.log('Dhaka To Khulna Kilometer:', dhakaToKhulnaKilometer)