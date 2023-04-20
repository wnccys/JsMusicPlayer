export default {
    properties(){
        this.image = document.querySelector(".img");
        this.title = document.querySelector("#music");
        this.artist = document.querySelector("#artist"); 
        this.seekbar = document.querySelector("#seekbar");
        this.playPause = document.querySelector(".play-button");
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions(){
        this.playPause.onclick = this.togglePlayPause();
    }
}