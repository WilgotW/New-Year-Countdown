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



const canvas = document.getElementById("canvas1");
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let hue = 0;
let hsl = "";

let maxParticleInScene = 10000;
let colorChangeSpeed = 1;
let particleAmount = 10;
let screenRefrechOpacity = '1';

let linesOn = true;

let e;

const mouse = {
    x: undefined,
    y: undefined
};


class Particle{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 10 + 6;
        this.xVelocity = Math.random() * 3 - 1.5;
        this.yVelocity = Math.random() * 3 - 1.5;
        this.color = color;
        this.shrinkRate = 0.1;
    }
    draw(){
        
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }
    update(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        if(this.radius > 0.2){
            this.radius -= this.shrinkRate;
        }
    }
}

function update(){
    refrech();
    for(i = 0; i < particles.length; i++){
        particles[i].draw();
        particles[i].update();
        
        
        
        if(particles.length > maxParticleInScene){
            particles[i].shrinkRate = 0.5;
        }
        if(particles[i].radius <= 0.6){
            particles.splice(i, 1);
            i--;
        }
        
        
    }

    hue += colorChangeSpeed;
    if(hue >= 360){
        hue = 0;
    }
    hsl = 'hsl(' + hue + ', 100%, 50%)';
    
    requestAnimationFrame(update);
}
update();


window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
    for(i = 0; i < particleAmount; i++){
        particles.push(new Particle(mouse.x, mouse.y, hsl));
    }
    
});

window.addEventListener('click', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
    for(i = 0; i < 50; i++){
        particles.push(new Particle(mouse.x, mouse.y, hsl));
    }
    
});

let currentMouseX = mouse.x;
let currentMouseY = mouse.y;
function checkInactivity(){
    if(mouse.x == currentMouseX && mouse.y == currentMouseY){
        removePaint();
    }
    currentMouseX = mouse.x;
    currentMouseY = mouse.y;
}
setInterval(checkInactivity, 1000);

function refrech(){
    c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
}
function removePaint(){
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
}