const form = document.getElementById("form");
const hourDisplay = document.getElementById("hour");
const minuteDisplay = document.getElementById("minute");
const secondsDisplay = document.getElementById("seconds");
const pauseStop = document.querySelector(".pause-stop");

const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const secondsInput = document.getElementById("seconds-input");
const startBtn = document.getElementById("submit");
const stopBtn = document.getElementById("stop");



const app = {
    isToggle: true,
    startInterval : null,
    seconds : 60,
    open : function(){
        form.style.transform = "translateX(0)";
        form.style.transition = "all 300ms ease";
    },
    close:function(){
        form.style.transform = "translateX(100%)";
    },
    getInput: function(){
        const dataArray = [Number(hourInput.value), 
                          Number(minuteInput.value),
                          Number(secondsInput.value)];
        return dataArray;
    },
    startCountdown: function(){
        let hour = this.getInput()[0];
        let minute = this.getInput()[1];
        let seconds = this.getInput()[2];


        this.startInterval = setInterval(() => {
            // this.startCountdown();
            if(seconds == 0 && minute == 0 && hour == 0){
                seconds = 0;
                minute = 0;
                hour = 0;
                this.stopInterval();
            }else if(seconds == 0 && minute == 0){
                hour -=1;
                minute = 59;
            }else if(seconds == 0){
                seconds = 59;
                minute -=1;
            }else{
                seconds --;
            }
           hourDisplay.innerHTML = hour;
           minuteDisplay.innerHTML = minute;
           secondsDisplay.innerHTML = seconds;
    }, 1000);


    },
    testing: function(){
       return (this.getInput()[0] -= 1);
    },
    counterInterval : function(){
        this.startInterval = setInterval(() => {
                // this.startCountdown();
               console.log( this.testing());
        }, 1000);
    },
    clearInput:function(){
        hourInput.value = "";
        minuteInput.value = "";
    },

    stopInterval: function(){
        clearInterval(this.startInterval);
    },
    showStopBtn:function(){
        startBtn.style.display = "none";
        stopBtn.style.display = "block";
    },
    showStartBtn:function(){
        startBtn.style.display = "block";
        stopBtn.style.display = "none";
    }
}

startBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    app.startCountdown();
    app.showStopBtn();
    // console.log(app.testing());
})
stopBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    app.stopInterval();
    app.showStartBtn();
})