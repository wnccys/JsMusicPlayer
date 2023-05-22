import audios from "./data.js";
import { path, secToMin } from "./utils.js";
import elements from "./playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    start(){
        elements.properties.call(this);

        this.update();
        this.audio.onended = () => this.next();
    },
    play(){
        this.audio.play();
        this.isPlaying = true;
    
        this.playPause.innerText = "pause";
    },
    pause(){
        this.audio.pause();
        this.isPlaying = false;

        this.playPause.innerText = "play_arrow";
    },
    togglePlayPause(){
        this.isPlaying ? this.pause() : this.play();
    },
    mute(){
        if (this.audio.muted){
            this.audio.muted = false;
            this.volIcon.innerText = "volume_up";
        }
        else{
            this.audio.muted = true;
            this.volIcon.innerText = "volume_off";
        }
    },
    setDuration(){ 
        this.seekbar.value = this.audio.currentTime;
        this.currentDuration.innerText = secToMin(this.audio.currentTime);
    },
    next(){
        if (this.currentPlaying == this.audioData.length){ // FIXNEEDED ///////////////
            this.repeat();
        }
        else{
            this.currentPlaying++;
            this.update();
        }
        this.audio.play();
    },
    update(){
        this.currentAudio = this.audioData[this.currentPlaying];

        this.image.style.background = `url('${path(
            this.currentAudio.cover
            )}') no-repeat center center / cover `;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file));

        this.audio.onloadeddata = () => {
            elements.actions.call(this);
        }
    },
    repeat(){
        this.currentPlaying = 0;
        this.update();
    }
}