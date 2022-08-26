const express = require('express')
const cors = require('cors');
const { Z_ASCII } = require('zlib');
const mysql = require('mysql2');
const e = require('express');
const app = express()

const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

var DbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'test'
})

app.listen(PORT, ()=>{
    DbConnection.connect((err) => {
        if(!err){
            console.log(`server is running at ${PORT}` )
        }else{
            console.log('error',err)
        }
})
})
// `title`,`description`
app.get("/api/get", (req, res) => {
    DbConnection.query("SELECT * FROM `movies`"
    ,(error, result)=>{
        if(!error){
            res.send(result)
        }else{
            res.send(error)
        }
    })
});

// add tutorial
app.post('/api/add',(req, res)=>{
    const title = req.body.newtitle;
    const description = req.body.newdescription;

    DbConnection.query("INSERT INTO `movies`(`title`, `description`, `published`)VALUES(?,?,?)"
    ,[title,description,false]
    ,(error, result)=>{
        if(!error){
            res.send(true)
        }else{
            console.log(false)
        }
    })
})
