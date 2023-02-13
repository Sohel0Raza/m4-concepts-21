function hoursMinute (hours){
    const timeHours = hours * 60;
    return timeHours;
}
const herHours = 5;
const hoursToMinute = hoursMinute(herHours)
console.log(hoursToMinute)