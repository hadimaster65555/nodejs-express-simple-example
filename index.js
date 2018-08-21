const path = require('path');

const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.json({
        name: 'hadimaster'
    });
});

app.get('/about', (request, response) => {
    response.send({
        name: 'hadimaster is cool'
    })
});

app.get('/index', (request, response) => {
    response.sendFile(path.resolve(__dirname,'index.html'));
});

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname,'contact.html'));
});
