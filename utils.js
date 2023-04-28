const path = function(file){
    return `assets/${file}`;
}

const secToMin = function(seconds){
    const minutes = Math.floor(seconds/60);
    return `${Number((("00" + minutes)).slice(-2))}:${Math.floor(seconds-(minutes*60))}`;
}

export { path, secToMin };