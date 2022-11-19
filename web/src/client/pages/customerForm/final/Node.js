const express = require('express');

const cors = require('cors');

const app = express();

//use cors to allow cross origin resource sharing
app.use(
    cors({
        origin: 'http://localhost:3000/form',
        credentials: true,
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let customerData = [];


app.post('/data', function(req, res) {
    const newData = {
        Email: req.body.email,
        Name: req.body.name,
        Number: req.body.number,
        Time: req.body.time
    };

    customerData.push(newData);
    console.log(customerData);
});

app.get('/data', function(req, res) {
    console.log('Inside Home Login');
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    console.log('Customer data : ', JSON.stringify(customerData));
    res.end(JSON.stringify(customerData));
});

//start your server on port 3001
app.listen(8080, () => {
    console.log('Server Listening on port 8080');
});