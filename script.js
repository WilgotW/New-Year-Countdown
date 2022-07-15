




const monthNum = document.getElementById("months")
const daysNum = document.getElementById("days");
const hoursNum = document.getElementById("hours");
const minutesNum = document.getElementById("minutes");
const secondsNum = document.getElementById("seconds");

function updateDate(){
    //months:
    monthNum.innerHTML = new Date().getMonth();
    //days:
    daysNum.innerHTML = new Date().getDate();
    //hours:
    hoursNum.innerHTML = new Date().getHours();
    //minutes:
    minutesNum.innerHTML = new Date().getMinutes();
    //seconds:
    secondsNum.innerHTML = new Date().getSeconds();
    requestAnimationFrame(updateDate);
}
updateDate();