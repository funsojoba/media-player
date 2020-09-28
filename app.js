let audio = document.getElementById("audio");
let trackWidth = document.querySelector(".tracker-width");
let range = document.querySelector(".range");

const app = {
    isPlaying : true,
    timeChange : 10,
   
    toggle: function(e){
        this.isPlaying = !this.isPlaying;
        
        if(!this.isPlaying){
            e.classList.remove("fa-play");
            e.classList.add("fa-pause");
            audio.play();
        }else{
            e.classList.add("fa-play");
            e.classList.remove("fa-pause");
            audio.pause();
        }
        range.max = audio.duration;

        audio.addEventListener("timeupdate", ()=>{
            range.value = audio.currentTime;
            this.reset();
        })
    },

    reset: function(){
        if(audio.currentTime == audio.duration){
            audio.currentTime = 0;
            playBtn.classList.add("fa-play")
            playBtn.classList.remove("fa-pause");
        }
    },

    fastForward : function(){
        audio.currentTime += this.timeChange;

        if(audio.currentTime == audio.duration){
            audio.currentTime += 0
        }
    },
    fastBackward : function(){
        audio.currentTime -= this.timeChange;

        if(audio.currentTime == 0){
            audio.currentTime -= 0
        }
    }

}

range.addEventListener("change", ()=>{
    audio.currentTime = range.value
})
