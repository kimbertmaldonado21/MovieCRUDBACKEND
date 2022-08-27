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

// `find by title`
app.get("/api/get/:movieName", (req, res) => {
    const movieName = req.params.movieName;
    const sql = "SELECT * FROM `movies` WHERE title = ?"
    DbConnection.query(sql,movieName
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

    const sql = "INSERT INTO `movies`(`title`, `description`, `published`)VALUES(?,?,?)"
    DbConnection.query( sql
    ,[title,description,false]
    ,(error, result)=>{
        if(!error){
            res.send(true)
        }else{
            console.log(false)
        }
    })
})

// delete tutorial
app.delete('/api/delete/:movieName',(req, res)=>{
    const movieName = req.params.movieName;
    const sql = `DELETE FROM movies WHERE title= ?`
    DbConnection.query(sql,movieName
    ,(error, result)=>{
        if(!error){
            res.send(result)
            console.log(result)
        }else{
            console.log(error)
        }
    })

})

// update tutorial
app.put('/api/update',(req, res)=>{
    const movieName = req.body.movieName;
    const movieDescription = req.body.movieDescription;
    console.log(movieName)
    console.log(movieDescription)
    const sql = `UPDATE movies SET description =? WHERE title = ?`
    DbConnection.query(sql,[movieDescription,movieName]
    ,(error, result)=>{
        if(!error){
            res.send(result)
            console.log(result)
        }else{
            console.log(error)
        }
    })

})
