import audios from "./data.js";
import { path } from "./utils.js";
import elements from "./playerElements.js";

export default {
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    isPlaying: false,
    start(){
        elements.properties.call(this);

        this.update();
        this.audio.onended = () => this.repeat();
    },
    play(){
        this.audio.play();
        this.isPlaying = true;
    },
    pause(){
        this.audio.pause();
        this.isPlaying = false;
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
    },
    repeat(){
        this.currentPlaying++;
        this.update();
    }
}