let path = require('path');
let fs = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath,{
    encoding: "UTF-8"
}, (err, data) => {
    let chirp = JSON.parse(data);
    console.log(chirp.name);
    console.log(chirp.comment);
    console.log(chirp.chirpId);
});