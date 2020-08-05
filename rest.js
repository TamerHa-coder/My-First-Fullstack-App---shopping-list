const express = require('express');
const app = express();
app.use(express.json());
app.use(logger);

function logger (req, res, next){
    console.log('request fired' + req.url + ' ' + req.method);
    next();
}

let posts = [
    {
        id: 'f43f',
        author: 'Tamer',
        content: 'Very good post'
    },
    {
        id: 'f56f',
        author: 'Dor',
        content: 'Very bad post'
    }
];


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/post', (req, res) => {
    res.send(posts)
})

app.post('/post', (req, res) => {
    posts.push(req.body);
    res.send(req.body)
})

app.get('/post/:id', (req, res) => {
    for(let post of posts){
        if(post.id === req.params.id){
            res.send(post);
        }
    }
})


app.put('/post/:id', (req, res) => {

    posts.forEach((post, i) =>{
    for(let post of posts){
            if(post.id === req.params.id){
                post[i] = req.body;
                res.send(req.body);
    }
   
        }
    }
)}
);

app.delete('/post/:id', (req, res) => {

    posts.forEach((post, i) =>{
    for(let post of posts){
            if(post.id === req.params.id){
                posts.splice(i, 1);
                res.send(req.params.id + ' deleted');
    }
   
        }
    }
)}
);




app.listen(3001);