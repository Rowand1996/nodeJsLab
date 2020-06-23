const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let posts = [];

let dataPath = path.join(__dirname, './popular-articles.json');

rp('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) {
        console.log(err);
    }
    // console.log(JSON.parse(body).data.children);

    let children = JSON.parse(body).data.children;
    let post = {}

    for (let i = 0; i < children.length; i++) {
        post[i] = {
            postId: i,
            postTitle: children[i].data.title,
            postUrl: children[i].data.url,
            postAuthor: children[i].data.author
        }
        posts.push(post[i]);
    }
    fs.writeFile(dataPath, JSON.stringify(posts), (err) => {
        if (err) {
            console.log(err);
        }
    });
});

