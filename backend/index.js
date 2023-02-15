const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/auth', function(req, res) {
    const client = new pg.Client({
        user: 'une',
        host: 'localhost',
        database: 'login',
        password: 'llsyou',
        port: 5432
    })
    
    client.connect()
    console.log("connect")

    var rows
    client.query("SELECT * FROM REGISTERED_USERS WHERE USER_NAME = $1;", [req.body.id]).then(resp => {
        rows = resp.rows;
        if(rows[0].user_password == req.body.pass){
            res.send({
                message: "OK"
            })
            client.end()
        }else{
            res.send({
                message: "認証エラー"
            })
            client.end()
        }
    }).catch(err => {
        console.error(err.stack);
        client.end();
    })

    //console.log(rows)
    // if(req.body.id == "une" && req.body.pass == "unko"){
    //     res.send({
    //         message: "OK"
    //     })
    // }else{
    //     req.send({
    //         message: "認証エラー"
    //     })
    // }
    
});

app.listen(process.env.PORT || 3000);