import audios from "data.js";
import { path } from "utils.js";
import elements from "playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,

    start(){
        elements.properties.call(this);

        this.update();
    },
    play(){
        this.audio.play();
        isPlaying = true;
    },
    pause(){
        this.audio.pause();
        isPlaying = false;
    },
    togglePlayPause(){
        this.isPlaying ? this.pause() : this.play();
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
    }
}