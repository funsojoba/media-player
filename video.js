let video = document.getElementById("video");
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
            video.play();
        }else{
            e.classList.add("fa-play");
            e.classList.remove("fa-pause");
            video.pause();
        }
        range.max = video.duration;

        video.addEventListener("timeupdate", ()=>{
            range.value = video.currentTime;
            this.reset();
        })
    },

    reset: function(){
        if(video.currentTime == video.duration){
            video.currentTime = 0;
            playBtn.classList.add("fa-play")
            playBtn.classList.remove("fa-pause");
        }
    },

    fastForward : function(){
        video.currentTime += this.timeChange;

        if(video.currentTime == video.duration){
            video.currentTime += 0
        }
    },
    fastBackward : function(){
        video.currentTime -= this.timeChange;

        if(video.currentTime == 0){
            video.currentTime -= 0
        }
    }

}

range.addEventListener("change", ()=>{
    video.currentTime = range.value
})
