let i=document.querySelector("input");
i.addEventListener("input",function (dets) {
    if (dets.data !== null) {
        console.log(dets.data);
    }
    
});
let ii=document.querySelector("select");
let device=document.querySelector("#device");
ii.addEventListener("change",function(dets){
    device.textContent=`${dets.target.value} device selected`;
//console.log(dets.target.value);
});

let h1=document.querySelector("h1");
window.addEventListener("keydown",function(dets){
if(dets.key===" "){
    h1.textContent="SPACE";
}else{
h1.textContent=dets.key;
}
});

let btn=document.querySelector(".btn");
let fileinp=document.querySelector("#fileinp");
btn.addEventListener("click",function () {
    fileinp.click();
});
    fileinp.addEventListener("change",function (dets) {
        const file =dets.target.files[0];
        if (file) {
            btn.textContent=file.name;
        }
        
    });
    //card generator
    let a=document.querySelector("form");
     let inputs=document.querySelectorAll(".forms input");
     let main=document.querySelector("#main");

     a.addEventListener("submit",function(dets){
        dets.preventDefault();
        let card=document.createElement("div");
        card.classList.add("card");
        let profile=document.createElement("div");
         profile.classList.add("profile");
        let img =document.createElement("img");
        img.setAttribute("src",inputs[0].value);
        let h3 =document.createElement("h3");
        h3.textContent=inputs[1].value;
        let h5 =document.createElement("h5");
        h5.textContent=inputs[2].value;
        let p =document.createElement("p");
        p.textContent=inputs[3].value;
        profile.appendChild(img);
        card.appendChild(profile);
        card.appendChild(h3);
        card.appendChild(h5);
        card.appendChild(p);
        main.appendChild(card);
        inputs.forEach(function (inp){
            if(inp.type !=="submit"){
                inp.value="";
            }
        });
        //random color 
              function getRandomColor() {
    const letters='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
     return color;   
    }
let box =document.querySelectorAll(".card");
box.forEach(box => {
box.style.backgroundColor=getRandomColor();
});                                                   
     });
     //mouse pe click karate color change
    /*let abcd=document.querySelector("#abcd");
    abcd.addEventListener("mouseover",function(){
        abcd.style.backgroundColor="pink";
    });
     abcd.addEventListener("mouseout",function(){
        abcd.style.backgroundColor="red";
        window.addEventListener("mousemove",function(dets){
            abcd.style.top=dets.clientY+"px";
            abcd.style.left=dets.clientX+"px";
        });

    });*/