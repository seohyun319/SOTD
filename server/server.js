const fs = require('fs');
const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const data = fs.readFileSync('../database.json');
const conf = JSON.parse(data);
const mysql=require('mysql');
const request=require('request');
const { Router } = require('express');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, origin');
    res.setHeader('Access-Control-Allow-Credentials', true);
    (req.method === 'OPTIONS') ?
    res.send(200) :
    next();
})

var query=connection.query('SELECT * FROM FORTUNE', (err, rows, fields) => {
    console.log(rows);
})

app.listen(port, () => console.log(`Listening on port ${port}`));