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
const puppeteer = require('puppeteer');
const cors=require('cors');

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
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

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
        var query=connection.query('UPDATE birth SET colors=(SELECT name FROM color ORDER BY RAND() limit 1), luck=(select luck from FORTUNE ORDER BY RAND() limit 1), kind=(SELECT kind FROM clothes ORDER BY RAND() limit 1), code=(SELECT code FROM color WHERE name=colors) WHERE id=?', i, (err, rows, fields)=>{
            
        })
    }
})

app.post('/info', (req,res)=>{   //생년월일 확인
    var month=req.body.month;
    var day=req.body.day;
    res.json({month:month, day:day});
})

// app.post('/info/fortune', (req, res)=>{ //생일 받아오기
//     var month=req.body.month;
//     var day=req.body.day;
//     var sql=[month, day];
    // var query=connection.query('SELECT luck FROM birth WHERE month=? AND day=?',[4,1],(err, rows, fields)=>{    //운세 전송
    //     request.post('http://localhost:5000/info/category',{form:{    
    //         luck: rows,
    //     }})
    //     // res.send(rows);
    // })
// })

// app.post('/info/category',(req,res)=>{
//     var luck=req.body.luck; 
//     var lucky=luck[0].luck;
//         var query=connection.query('SELECT category FROM FORTUNE WHERE luck=?', lucky ,(err,rows,fields)=>{
//             request.post('http://localhost:5000/info/fortunefood',{form:{    //category에서 가게 이름 추출하기 위해 전달
//             category: rows,
//             luck: luck
//         }})
//         })
        
// })

// app.post('/info/fortunefood', (req, res)=>{ //가게 이름 전송
//     var luck=req.body.luck;
//     console.log(luck[0]);
//     var cate=req.body.category; 
//     var category=(cate[0].category).split(', ');
//     for(var j=0;j<category.length;j++){
//         var query=connection.query('SELECT distinct title FROM '+ category[j]+' ORDER BY RAND() limit 1',(err,rows,fields)=>{
//             console.log(rows);
//         })
//     }
// })

app.post('/info/fortune', (req, res)=>{ //생일 받아오기
    var month=req.body.month;
    var day=req.body.day;
    var sql=[month, day];
    var query=connection.query('SELECT category FROM FORTUNE WHERE luck=(SELECT luck FROM birth WHERE month=? AND day=?)',[4,1],(err, rows, fields)=>{
        request.post('http://localhost:5000/info/fortunefood',{form:{    //category에서 가게 이름 추출하기 위해 전달
            category: rows,
            month: 4,
            day: 1
        }})
    })
})

app.post('/info/fortunefood',(req,res)=>{
    var month=req.body.month;
    var day=req.body.day;
    var sql=[month, day];
    var category=req.body.category; //category column 값
    for(var i=0;i<category.length;i++){
        var cate=(category[i].category).split(', ');    //category를 , 기준으로 나누기
        for(var j=0;j<cate.length;j++){
            var query=connection.query('SELECT distinct title FROM '+ cate[j]+' ORDER BY RAND() limit 1;'+'SELECT luck FROM birth WHERE month=? AND day=?',sql,(err,rows,fields)=>{
                res.send(rows);  //rows[1][0].luck
            })
        }
    }
})

app.post('/info/color', (req,res)=>{
    var month=req.body.month;
    var day=req.body.day;
    var sql=[month, day];
    var query=connection.query('SELECT colors, kind, code FROM birth WHERE (month=? AND day=?)',[4,1],(err, rows, fields)=>{
        console.log(rows);
    })
})




app.listen(port, () => console.log(`Listening on port ${port}`));