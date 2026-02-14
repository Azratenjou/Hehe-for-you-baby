/* ===== HEART ===== */
const container=document.getElementById("heart");
const text="hmmm imissyou";

const size=Math.min(window.innerWidth,500);
const scale=size/45;
const total=120;

for(let i=0;i<total;i++){
let span=document.createElement("div");
span.className="text-item";
span.innerText=text;

let t=(i/total)*2*Math.PI;

let x=16*Math.pow(Math.sin(t),3);
let y=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));

let posX=(x*scale)+(container.clientWidth/2);
let posY=(y*scale)+(container.clientHeight/2);

span.style.left=posX+"px";
span.style.top=posY+"px";
span.style.animationDelay=(i*0.03)+"s";

container.appendChild(span);
}

/* ===== STARS ===== */
const starContainer=document.getElementById("stars");
for(let i=0;i<120;i++){
let star=document.createElement("div");
star.className="star";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.animationDuration=(Math.random()*3+2)+"s";
starContainer.appendChild(star);
}

/* ===== SHOOTING STARS ===== */
setInterval(()=>{
let shoot=document.createElement("div");
shoot.className="shooting-star";
shoot.style.left=Math.random()*window.innerWidth+"px";
shoot.style.top=Math.random()*200+"px";
document.body.appendChild(shoot);

setTimeout(()=>shoot.remove(),1500);
},3000);

/* ===== FALLING ROSES ===== */
setInterval(()=>{
let rose=document.createElement("div");
rose.className="rose";
rose.innerHTML="🌹";
rose.style.left=Math.random()*100+"vw";
rose.style.animationDuration=(Math.random()*5+5)+"s";
document.body.appendChild(rose);

setTimeout(()=>rose.remove(),9000);
},500);