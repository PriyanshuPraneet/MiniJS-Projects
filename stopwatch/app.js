let secondEllapsed=0;
let interval=null;
const time = document.getElementById("time");

function padStart(name){                                                 //to represent in the format 00:01 etc
    return String(name).padStart(2,"0");
}

function setTime(){                                                      //display function
    const minutes = Math.floor(secondEllapsed/60);
    const seconds = secondEllapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondEllapsed++;
    setTime();
}

function startTimer(){
    if(interval){
        stopTimer();
    }
    interval = setInterval(timer,1000);
}



function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    stopTimer();
    secondEllapsed = 0;
    setTime();
}