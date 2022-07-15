

let monthsLeft;
let daysLeft;
let hoursLeft;
let minutesLeft;
let secondsLeft;

const monthNum = document.getElementById("months")
const daysNum = document.getElementById("days");
const hoursNum = document.getElementById("hours");
const minutesNum = document.getElementById("minutes");
const secondsNum = document.getElementById("seconds");

function updateDate(){
    //months:
    monthNum.innerHTML = monthsLeft;
    //days:
    daysNum.innerHTML = daysLeft;
    //hours:
    hoursNum.innerHTML = hoursLeft;
    //minutes:
    minutesNum.innerHTML = minutesLeft;
    //seconds:
    secondsNum.innerHTML = secondsLeft;
    requestAnimationFrame(updateDate);
}
updateDate();

const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

function countDown(){
    //months
    monthsLeft = 12 - (new Date().getMonth() + 1);
    //days:
    let daysThisMonth = getDays(new Date().getFullYear(), (new Date().getMonth() + 1));
    daysLeft = daysThisMonth - new Date().getDate();
    //hours:
    hoursLeft = 24 - new Date().getHours();
    //minutes:
    minutesLeft = 60 - new Date().getMinutes();
    //seconds:
    secondsLeft = 60 - new Date().getSeconds();
    requestAnimationFrame(countDown);
}
countDown();

