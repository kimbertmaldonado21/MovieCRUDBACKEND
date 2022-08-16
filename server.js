const express = require('express')
const cors = require('cors');
const { Z_ASCII } = require('zlib');

const app = express()

const db = require('./models')
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to this application." });
});

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}` )
})