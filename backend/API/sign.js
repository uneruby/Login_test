const client = require('../data/DBclient')

exports.signIn = (req, res) => {
//    DB.client.connect()
    var rows
    client.query("SELECT * FROM REGISTERED_USERS WHERE USER_NAME = $1;", [req.body.id]).then(resp => {
        rows = resp.rows;
        if(rows[0].user_password == req.body.pass){
            res.send({
                message: "OK"
            })
            //client.end()
            console.log("end")
        }else{
            res.send({
                message: "認証エラー"
            })
            //client.end()
            console.log("end")
        }
    }).catch(err => {
        console.error(err.stack);
        //client.end();
    })
}

exports.signUp = (req, res) => {
//    DB.client.connect()
    client.query("INSERT INTO REGISTERED_USERS (user_name, user_password) VALUES ($1, $2)", [req.body.id, req.body.pass]).then(res => {
        console.log(res)
        //client.end();
        console.log("end")
    }).catch(err => {
        console.log(err)
        //client.end();
        console.log("end")
    })
}