function leapYear (year){
    var remainder = year % 4;
    // var remainder = year % 100;
    // var remainder = year % 400;

    if(remainder === 0){
        return 'yes';
    }
    else{
        return 'no';
    }
}
const MyYear = 2000;
const isMyYearLeapYear = leapYear(MyYear)
console.log('My Year is leap Year:', isMyYearLeapYear)