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