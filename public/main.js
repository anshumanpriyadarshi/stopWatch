// DECLARATIONS
let s = 0;
let m = 0;
let h = 0;
let ms = 0;
let status = false;
let timestamps = [];

 let url = '';
 let obj = '/viewhistory?obj='

//DOM Selecting
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let second = document.getElementById("second");
let msecond = document.getElementById("msecond");

let start = document.getElementById("start");
let stopp = document.getElementById("stop");
let reset = document.getElementById("reset");
let history = document.getElementById("history") ;

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
    timestamps.push({s : s,
    m : m,
    h : h,
    ms : ms
    });

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
    url = JSON.stringify(timestamps);
    //obj = obj + url;
    // console.log(timestamps);
    // console.log(url);
    updatelink();
    
}

function stopclock(){
    timestamps.push({s : s,
        m : m,
        h : h,
        ms : ms
        });
    if(status === true){
        status = false
        clearInterval(x)
    }
    else{
        
    }
    url = JSON.stringify(timestamps);
    //obj = obj + url;
    // console.log(timestamps);
    // console.log(url);
    updatelink();
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



// OBJECT append

function updatelink(){
    history.setAttribute("href", obj + url);
}
