export default {
    properties(){
        this.image = document.querySelector(".img");
        this.title = document.querySelector(".player-data p");
        this.artist = document.querySelector(".player-data h4"); 
        this.seekbar = document.querySelector("#seekbar")
        this.playPause = document.querySelector(".play_button")
    }
    ,
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions (){
        this.playPause.onclick = () => { this.togglePlayPause() };
    }
}