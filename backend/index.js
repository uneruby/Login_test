const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const client = new pg.Client({
    user: 'une',
    host: 'localhost',
    database: 'login',
    password: 'llsyou',
    port: 5432
})

client.connect()
// const query = {
//     text: 'SELECT USER_NAME FROM REGISTERED_USERS;',
// }
const query = client.query('SELECT * FROM REGISTERED_USERS WHERE USER_NAME = $1;')


app.post('/auth', function(req, res) {
    if(req.body.id == "une" && req.body.pass == "unko"){
        res.send({
            message: "OK",
            query: query
        })
    }else{
        res.send({
            message: "認証エラー"
        })
    }
});

app.listen(process.env.PORT || 3000);