// ===========================
// Premium Love Letter Script
// ===========================

const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const topCover = document.querySelector(".top");
const letter = document.querySelector(".letter");
const sideText = document.querySelector(".sideText");
const button = document.getElementById("loveBtn");
const finalMessage = document.getElementById("finalMessage");
const emojiContainer = document.getElementById("emojiContainer");

let opened = false;

// Open Envelope

heart.onclick = ()=>{

setTimeout(()=>{
    envelope.style.transform="translateY(220px) scale(0.8)";
    envelope.style.opacity="0";
},1000);

if(opened) return;

opened=true;

// open cover

topCover.style.transform="rotateX(180deg)";

// pull letter

setTimeout(()=>{

letter.style.height="620px";

},400);

// show side text

setTimeout(()=>{

sideText.style.display="block";

},1200);

// show button

setTimeout(()=>{

button.style.display="block";

},2500);

// floating emojis

setInterval(createEmoji,300);

// heart rain

setInterval(heartRain,500);

}

// ============================
// Floating Emoji
// ============================

const emojiList=[

"❤️",

"💖",

"💕",

"💘",

"💝",

"🥰",

"😍",

"😘",

"🌹",

"✨"

];

function createEmoji(){

let e=document.createElement("div");

e.className="emoji";

e.innerHTML=emojiList[Math.floor(Math.random()*emojiList.length)];

e.style.left=Math.random()*100+"vw";

e.style.bottom="-50px";

e.style.fontSize=(20+Math.random()*35)+"px";

e.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(e);

setTimeout(()=>{

e.remove();

},8000);

}

// ============================
// Heart Rain
// ============================

function heartRain(){

let h=document.createElement("div");

h.className="rainHeart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

}
// =============================
// Fireworks Effect
// =============================

function firework(x, y) {

    const icons = ["❤️","💖","💕","💘","💝","✨"];

    for(let i=0;i<25;i++){

        const p=document.createElement("div");

        p.innerHTML=icons[Math.floor(Math.random()*icons.length)];

        p.style.position="fixed";
        p.style.left=x+"px";
        p.style.top=y+"px";
        p.style.fontSize=(20+Math.random()*20)+"px";
        p.style.pointerEvents="none";
        p.style.zIndex="99999";

        let angle=Math.random()*Math.PI*2;
        let distance=80+Math.random()*120;

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

// =============================
// Mouse Hearts
// =============================

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>0.85){

        const h=document.createElement("div");

        h.innerHTML="❤️";

        h.style.position="fixed";
        h.style.left=e.clientX+"px";
        h.style.top=e.clientY+"px";
        h.style.pointerEvents="none";
        h.style.fontSize="18px";
        h.style.zIndex="99999";

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

// =============================
// Button Click
// =============================

button.onclick=()=>{

    finalMessage.style.display="block";

    for(let i=0;i<12;i++){

        setTimeout(()=>{

            firework(
                Math.random()*window.innerWidth,
                Math.random()*window.innerHeight
            );

        },i*250);

    }

};
// ==============================
// Romantic Background Music
// ==============================

const music = document.getElementById("music");

document.body.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {});
    }
}, { once: true });

// ==============================
// Love Timer
// ==============================

// তোমাদের প্রেম শুরু হওয়ার তারিখ এখানে পরিবর্তন করো
const loveDate = new Date("2026-06-01 00:00:00");

function updateLoveTimer(){

    let now = new Date();

    let diff = now - loveDate;

    let days = Math.floor(diff/(1000*60*60*24));

    let hours = Math.floor((diff/(1000*60*60))%24);

    let mins = Math.floor((diff/(1000*60))%60);

    let secs = Math.floor((diff/1000)%60);

    let timer = document.getElementById("loveTimer");

    if(timer){

        timer.innerHTML=
        `
        ❤️ ${days} Days
        ${hours} Hours
        ${mins} Minutes
        ${secs} Seconds ❤️
        `;

    }

}

setInterval(updateLoveTimer,1000);

// ==============================
// Sparkle Effect
// ==============================

function sparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.fontSize=(10+Math.random()*20)+"px";

    s.style.pointerEvents="none";

    s.style.opacity=.8;

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

setInterval(sparkle,350);

// ==============================
// Random Fireworks
// ==============================

setInterval(()=>{

    firework(

        Math.random()*window.innerWidth,

        Math.random()*window.innerHeight/2

    );

},8000);

// ==============================
// Finish
// ==============================

console.log("❤️ Love Letter Website Loaded Successfully ❤️");
