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

app.post('/auth', function(req, res) {
    const query = {
        text: 'SELECT * FROM REGISTERED_USERS',
        //value: ['une', 'unko'],
    }
    var rows
    client.query(query).then(resp => {
        rows = resp.rows;
        console.log(rows[0])
        res.send({
            message: "OK"
        })
        client.end()
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