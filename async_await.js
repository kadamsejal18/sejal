const message=["Initializing Hacking",
      "Reading your Files",
      "Password files Detected",
      "Sending all Passwords and personal files to server",
      "Cleaning up",
      "Hack Complete"];
      const container=document.getElementById("hacktext");
      
      let messageIndex=0;
      let dotCount=0;

      let currentLine = document.createElement("p");
    hacktext.appendChild(currentLine);

      const interval=setInterval(()=>{
        if (messageIndex>=message.length){
            clearInterval(interval);
            return;
        }
        currentLine.textContent=message[messageIndex]+".".repeat(dotCount);
        dotCount++;

        //h.textContent=message[messageIndex]+dots;
        dotCount++;
        if (dotCount>4) {
            dotCount=0;
            messageIndex++;

            if (messageIndex >= messages.length) {
                currentLine=document.createElement("p");
                CSSContainerRule.appendChild(currentLine);
          
        }
            
        }
      },500);