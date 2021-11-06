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
const schedule = require('node-schedule');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database,
    multipleStatements:true
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

const reset=schedule.scheduleJob('0 0 0 * * *', ()=>{
    var i;
    for(i=1;i<=365;i++){
        var query=connection.query('UPDATE birth SET luck=(select luck from FORTUNE ORDER BY RAND() limit 1) WHERE id=?', i, (err, rows, fields)=>{
            console.log("reset");
        })
    }
})

app.post('/info', (req,res)=>{   //생년월일 확인
    
})

app.post('/info/fortune', (req, res)=>{ //생일 받아오기
    var month=req.body.month;
    var day=req.body.day;
    var sql=[month, day];
    var query=connection.query('SELECT category FROM FORTUNE WHERE luck=(SELECT luck FROM birth WHERE month=? AND day=?)',[4,1],(err, rows, fields)=>{
        request.post('http://localhost:5000/info/fortunefood',{form:{    //category에서 가게 이름 추출하기 위해 전달
            category: rows
        }})
        res.send(rows);
    })
})

app.post('/info/fortunefood',(req,res)=>{
    var category=req.body.category; //category column 값
    for(var i=0;i<category.length;i++){
        var cate=(category[i].category).split(', ');    //category를 , 기준으로 나누기
        for(var j=0;j<cate.length;j++){
            var query=connection.query('SELECT distinct title FROM '+ cate[j]+' ORDER BY RAND() limit 1',(err,rows,fields)=>{
                res.send(rows);
            })
        }
    }
})


app.listen(port, () => console.log(`Listening on port ${port}`));