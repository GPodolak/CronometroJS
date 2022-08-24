let seconds = 00
let minutes =  00
let Hour= 00
let intervalTimer

function start(){
    intervalTimer = setInterval(counter,1000)
}

function counter () {
    seconds++
    if(seconds == 60){
        minutes++
        seconds=0
        if(minutes== 60){
            minutes = 0
            Hour++
        }
    }
    document.getElementById('timer').innerText= zero(Hour)+':'+zero(minutes)+':'+zero(seconds)
};

function PauseTimer(){
clearInterval(intervalTimer);
};


function stopTime (){
clearInterval(intervalTimer)
seconds= 0
minutes= 0
document.getElementById('timer').innerText='00:00'

};

function zero (zero){
if(zero< 10){
return ('0'+zero)
}else
return(zero)
}
//Logica realizada com ajuda do video no canal Leo Ujo