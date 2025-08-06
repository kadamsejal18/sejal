const container =document.getElementById("container");
const card=document.createElement("div");
card.className="card";
const imageDiv=document.createElement("div");
imageDiv.className="image";
const img =document.createElement("img");
img.src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw";
const capsule=document.createElement("div");
capsule.className="capsule";
capsule.textContent="31:06"
imageDiv.appendChild(img);
imageDiv.appendChild(capsule);
//text Div 
const textDiv=document.createElement("div");
textDiv.className="text";
const h1=document.createElement("h1");
h1.textContent="Introduction to Backend | Sigma Web Dev video #2";
const p=document.createElement("p");
p.textContent="CodeWithHarry . 727K views .2 months ago";
textDiv.appendChild(h1);
textDiv.appendChild(p);
card.appendChild(imageDiv);
card.appendChild(textDiv);
container.appendChild(card);