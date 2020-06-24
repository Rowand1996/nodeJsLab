const path = require('path'),
        fs = require('fs'),
        rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json');

rp('https://reddit.com/r/popular.json')
    .then(res => JSON.parse(res).data.children)
    .then(articles => {
        let posts = [];
        let post = {};
        for (let i = 0; i < articles.length; i++) {
            post[i] = {
                postId: i,
                postTitle: articles[i].data.title,
                postUrl: articles[i].data.url,
                postAuthor: articles[i].data.author
            }
            posts.push(post[i]);
        };
        fs.writeFile(dataPath, JSON.stringify(posts), (err) => {
            if (err) throw err;
            console.log("saved the file!");
        });
    })
    .catch(err => console.log(err));