import audios from "data.js";
import { path } from "utils.js";
import elements from "playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,

    start(){
        update();
    },
    update(){
        this.currentAudio = this.audioData[this.currentPlaying];
        elements.createAudioElement.call(this, path(this.currentAudio));

        this.audio.play();
    }
}