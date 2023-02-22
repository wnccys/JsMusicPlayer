import player from "./player.js"

const path = function(file){
    return `assets/${file}`;
};


window.addEventListener("load", player.start());
