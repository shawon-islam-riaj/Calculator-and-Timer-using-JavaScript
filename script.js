
function add(value){
    document.getElementById("display").value += value;
}

function calculate(){

    let result = eval(
        document.getElementById("display").value
    );

    document.getElementById("display").value = result;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}



let sec = 0;
let min = 0;
let hr = 0;

let timer;

function updateTime(){

    sec++;

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hr++;
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    document.getElementById("time").innerHTML =
    h + ":" + m + ":" + s;
}

function start(){
    timer = setInterval(updateTime, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){

    clearInterval(timer);

    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("time").innerHTML =
    "00:00:00";
}