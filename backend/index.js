const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/auth', async function(req, res) {
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
});

app.post('/signUp', function(req, res) {
    const client = new pg.Client({
        user: 'une',
        host: 'localhost',
        database: 'login',
        password: 'llsyou',
        port: 5432
    })
    
    client.connect()
    console.log("connect")
    console.log(req.body.id)
    console.log(req.body.pass)

    client.query("INSERT INTO REGISTERED_USERS (user_name, user_password) VALUES ($1, $2)", [req.body.id, req.body.pass]).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

})

app.listen(process.env.PORT || 3000);