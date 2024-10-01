
// Question number 2

function getCurrentTime(){
    var rightNow = new Date();
    var hour= rightNow.getHours();
    var minute= rightNow.getMinutes();
    var second= rightNow.getSeconds();

    var duration ="AM";

    if(hour >= 12 )
        duration="PM";

    hour = hour % 12;

    if(hour === 0)
    hour=12;

    if(minute < 10)
        minute = '0' + minute;
    if (second < 10)
        second ='0' + second;

    var exactTime = (hour +':' + minute + ':' + second + ' ' + duration);

    return exactTime;
}
console.log(getCurrentTime());



// Question number 3

var str='JavaScript';
console.log(str.slice(1,-1));