const path = function(file){
    return `assets/${file}`;
}

const secToMin = function(seconds){
    const minutes = Math.floor(seconds/60);
    return `${(("00" + minutes)).slice(-2)}:${("00" + Math.floor(seconds-(minutes*60))).slice(-2)}`;
}

export { path, secToMin };