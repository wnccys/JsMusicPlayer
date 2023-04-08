import audios from "data.js";

export default {
    audioData: audios,
    currentPlaying: 0,
    start(){
        this.audio.play();
    }
}