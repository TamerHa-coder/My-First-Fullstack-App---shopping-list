const express = require('express');
const app = express();
app.use(express.json());
app.use(logger);

function logger (req, res, next){
    console.log('request fired' + req.url + ' ' + req.method);
    next();
}

let items = [
    { 
        id : '1' ,
        name: 'milk'
    },
    {
        id : '2',
        name: 'eggs'
    },
    {
        id : '3',
        name: 'bread'
    }
    ];


app.get('/products', (req, res) => {
    res.send(items);
});

app.get('/products/:id', (req, res) => {
    for(let item of items){
        if(item.id === req.params.id){
            res.send(item);
        }  
    }
});

app.put('/products/:id', (req, res) => {
    items.forEach((item, i) =>{
    for(let item of items){
            if(item.id === req.params.id){
                item[i] = req.body;
                res.send(req.body);
            }
    }
    }
)}
);

app.delete('/products/:id', (req, res) => {
    items.forEach((item, i) =>{
    for(let item of items){
            if(item.id === req.params.id){
                items.splice(i,1);
                res.send();
    }
   
        }
    }
)}
);




app.listen(3001);