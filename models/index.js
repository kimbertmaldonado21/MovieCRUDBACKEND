const dbconfig = require("../config/db.config")
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD,{
    host : dbconfig.HOST,
    dialect : dbconfig.dialect,
    operatorAliases :false,
    pool : {
        max : dbconfig.pool.max,
        min : dbconfig.pool.min,
        acquire : dbconfig.pool.acquire,
        idle : dbconfig.pool.idle
    }
})
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
console.error('Unable to connect to the database: ', error);
});

const db ={}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require('./tutorial.model')(sequelize, Sequelize);
db.tutorials = require('./users.mode')(sequelize, Sequelize);
module.exports = db;
