import {secToMin} from "./utils.js";

export default {
    properties(){
        this.image = document.querySelector(".img");
        this.title = document.querySelector("#music");
        this.artist = document.querySelector("#artist"); 
        this.seekbar = document.querySelector("#seekbar");
        this.volIcon = document.querySelector("#vol-icon");
        this.volCtrl = document.querySelector("#vol-ctrl");
        this.playPause = document.querySelector(".play-button i");
        this.totalDuration = document.querySelector("#total-duration");
        this.currentDuration = document.querySelector("#current-duration");
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions(){
        this.playPause.onclick = () => this.togglePlayPause();
        this.volIcon.onclick = () => this.mute();
        this.totalDuration.innerText = secToMin(this.audio.duration);
        this.seekbar.max = this.audio.duration;
        this.audio.ontimeupdate = () => this.setDuration();
        this.seekbar.oninput = () => {
            this.audio.currentTime = this.seekbar.value;
            this.currentDuration.innerText = secToMin(this.audio.currentTime);
        };
    }
}