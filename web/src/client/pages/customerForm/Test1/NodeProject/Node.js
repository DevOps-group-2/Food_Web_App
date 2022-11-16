const express = require('express');

const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let books = [];



app.post('/data', function(req, res) {
    const newBook = {
        Email: req.body.email,
        Name: req.body.name,
        Number: req.body.number,
    };

    books.push(newBook);
    console.log(books);
});

app.get('/data', function(req, res) {
    console.log('Inside Home Login');
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    console.log('Books : ', JSON.stringify(books));
    res.end(JSON.stringify(books));
});

//start your server on port 3001
app.listen(8080, () => {
    console.log('Server Listening on port 3001');
});