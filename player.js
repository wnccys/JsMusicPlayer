import audios from "data.js";
import { path } from "utils.js";
import elements from "playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,

    start(){
        elements.properties.call(this);

        this.update();
    },

    update(){
        this.currentAudio = this.audioData[this.currentPlaying];
        this.image.style.background = `url('${path(
            this.currentAudio.cover
            )}') no-repeat center center / cover `;

        elements.createAudioElement.call(this, path(this.currentAudio.file));

    }
}