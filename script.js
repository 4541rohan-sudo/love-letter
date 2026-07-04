// =========================
// Love Letter Script v2
// =========================

const heart = document.getElementById("heart");
const lid = document.querySelector(".lid");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const side = document.querySelector(".side");
const btn = document.getElementById("btn");
const final = document.getElementById("final");
const timer = document.getElementById("loveTimer");

let opened = false;

// Love Start Date
const loveDate = new Date("2026-06-01 00:00:00");

// =========================
// Envelope Open
// =========================

heart.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    // Open lid
    lid.style.transform = "rotateX(180deg)";

    // Hide heart
    heart.style.opacity = "0";

    // Move envelope down
    setTimeout(() => {

        envelope.style.transform = "translateY(180px)";
        envelope.style.opacity = ".25";

    },600);

    // Show full letter
    setTimeout(() => {

        letter.style.height = "850px";
        letter.style.padding = "25px";

    },500);

    // Show side text
    setTimeout(() => {

        side.style.display="block";

    },1500);

    // Show button
    setTimeout(() => {

        btn.style.display="block";

    },2500);

});

// =========================
// Floating Hearts
// =========================

const hearts=[
"❤️","💖","💕","💘","💝","💗","💞","🥰","😍","😘"
];

function floatingHeart(){

const h=document.createElement("div");

h.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.top="110vh";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.pointerEvents="none";

h.style.zIndex="99999";

h.animate([
{
transform:"translateY(0)",
opacity:0
},
{
opacity:1
},
{
transform:"translateY(-120vh)",
opacity:0
}
],{
duration:5000+Math.random()*3000
});

document.body.appendChild(h);

setTimeout(()=>{
h.remove();
},8000);

}

setInterval(floatingHeart,300);
// =========================
// Fireworks Effect
// =========================

function firework(x,y){

const icons=["❤️","💖","💕","💘","💝","✨"];

for(let i=0;i<30;i++){

const p=document.createElement("div");

p.innerHTML=icons[Math.floor(Math.random()*icons.length)];

p.style.position="fixed";

p.style.left=x+"px";

p.style.top=y+"px";

p.style.pointerEvents="none";

p.style.fontSize=(18+Math.random()*18)+"px";

p.style.zIndex="999999";

const angle=Math.random()*Math.PI*2;

const distance=100+Math.random()*150;

p.animate([

{
transform:"translate(0,0) scale(1)",
opacity:1
},

{
transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px) scale(0)`,
opacity:0
}

],{

duration:1800,

easing:"ease-out"

});

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},1800);

}

}

// =========================
// Button Click
// =========================

btn.addEventListener("click",()=>{

final.style.display="block";

for(let i=0;i<12;i++){

setTimeout(()=>{

firework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight

);

},i*300);

}

});

// =========================
// Love Timer
// =========================

function updateTimer(){

const now=new Date();

const diff=now-loveDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor((diff/3600000)%24);

const mins=Math.floor((diff/60000)%60);

const secs=Math.floor((diff/1000)%60);

timer.innerHTML=

`❤️ ${days} Days ${hours} Hours ${mins} Minutes ${secs} Seconds ❤️`;

}

setInterval(updateTimer,1000);

updateTimer();

// =========================
// Mouse Hearts
// =========================

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.8){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.pointerEvents="none";

h.style.fontSize="18px";

h.style.zIndex="999999";

h.animate([

{
transform:"translateY(0)",
opacity:1
},

{
transform:"translateY(-60px)",
opacity:0
}

],{

duration:1200

});

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},1200);

}

});

// =========================
// Random Fireworks
// =========================

setInterval(()=>{

firework(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

},9000);
// =========================
// Sparkle Effect
// =========================

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(10+Math.random()*20)+"px";

s.style.pointerEvents="none";

s.style.zIndex="9999";

s.animate([

{
opacity:0,
transform:"scale(.2)"
},

{
opacity:1,
transform:"scale(1)"
},

{
opacity:0,
transform:"scale(.2)"
}

],{

duration:2500

});

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},2500);

}

setInterval(sparkle,400);

// =========================
// Heart Rain
// =========================

function heartRain(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

heart.animate([

{
transform:"translateY(0)",
opacity:1
},

{
transform:"translateY(110vh)",
opacity:0
}

],{

duration:5000

});

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(heartRain,700);

// =========================
// Floating Roses
// =========================

function roseFloat(){

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=Math.random()*100+"vw";

rose.style.bottom="-30px";

rose.style.fontSize="28px";

rose.style.pointerEvents="none";

rose.style.zIndex="99999";

rose.animate([

{
transform:"translateY(0)",
opacity:0
},

{
opacity:1
},

{
transform:"translateY(-120vh)",
opacity:0
}

],{

duration:8000

});

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

}

setInterval(roseFloat,2500);

// =========================
// Background Music
// =========================

document.body.addEventListener("click",()=>{

const music=document.getElementById("music");

if(music){

music.play().catch(()=>{});

}

},{once:true});

// =========================
// Finished
// =========================

console.log("❤️ Premium Love Letter Loaded ❤️");
