// const express = require('express')
// const cors = require('cors');
// const { Z_ASCII } = require('zlib');

// const app = express()

// const db = require('./models')
// db.sequelize.sync();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions))

// app.use(express.json())

// app.use(express.urlencoded({ extended: true}))

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to this application." });
// });

// force drop table 

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, ()=>{
//     console.log(`server is running at ${PORT}` )
// })
// app.listen(PORT)


const Sequelize = require('sequelize')

const sequelize = new Sequelize( 
    'test',
    'root',
    '',
    {
    host: 'localhost',
    dialect: 'mysql'
    }
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
console.error('Unable to connect to the database: ', error);
});


const Tutorial = sequelize.define("Movie",{
    title: {
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    published: {
    type: Sequelize.BOOLEAN
    }
})
sequelize.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
console.error('Unable to create table : ', error);
});