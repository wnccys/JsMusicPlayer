export default {
    properties(){
        this.image = document.querySelector(".img");
        this.title = document.querySelector(".player-data p");
        this.artist = document.querySelector(".player-data h4"); 
        this.seekbar = document.querySelector("#seekbar")
    }
    ,
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions (){
        
    }
}