// DECLARATIONS
let s = 0;
let m = 0;
let h = 0;
let ms = 0;
let status = false;

//DOM Selecting
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let second = document.getElementById("second");
let msecond = document.getElementById("msecond");

let start = document.getElementById("start");
let stopp = document.getElementById("stop");
let reset = document.getElementById("reset");

// CLOCK LOGIC
function stopWatch(){
    if(ms === 1000)
    {
        s++;
        ms = 0;
    }
    else if(s === 60){
        m++;
        s=0; ms=0;
    }
    else if(m === 60){
        h++;
        m=0; s=0; ms=0;
    }  
} 

// CLOCK CAll
function startclock(){
    if(status === true){
        return;
    }
    else{
        status = true;

       x = setInterval(()=>{
            ms += 10; 
            stopWatch();
            minute.innerHTML = m;
            second.innerHTML = s;
            hour.innerHTML = h;
            msecond.innerHTML = ms;
            // console.log(h + ":" + m + ":" + s);
        },10);
    } 
}

function stopclock(){
    if(status === true){
        status = false
        clearInterval(x)
    }
    else{
        return
    }
}


//Event LIstening and handling
start.addEventListener("click", ()=>{
    startclock();
});

stopp.addEventListener("click", ()=>{
    stopclock();
});

reset.addEventListener("click",()=>{
    stopclock();
    s = 0;
    m = 0;
    h = 0;
    ms = 0;
    minute.innerHTML = m;
    second.innerHTML = s;
    hour.innerHTML = h;
    msecond.innerHTML = ms;
})
