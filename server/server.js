let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {
        "name": "Rowan",
        "comment": "this is my chirp!",
        "chirpId": "1"
    },
    {
        "name": "Bob",
        "comment": "this is bobs chirp!",
        "chirpId": "2"
    },
    {
        "name": "Jhon",
        "comment": "this is jhons chirp!",
        "chirpId": "3"
    },
    {
        "name": "David",
        "comment": "this is davids chirp!",
        "chirpId": "4"
    },
    {
        "name": "Roger",
        "comment": "this is rogers chirp!",
        "chirpId": "5"
    }
]

// fs.readFile(dataPath, {
//     encoding: "UTF-8"
// }, (err, data) => {
//     let chirps = JSON.parse(data);

//     for (let i = 0; i < chirps.length; i++) {
//         console.log(chirps[i].name);
//         console.log(chirps[i].comment);
//         console.log(chirps[i].chirpId);
//     }

// });

// fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });