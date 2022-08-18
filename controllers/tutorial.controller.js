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
// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
// }).catch((error) => {
// console.error('Unable to create table : ', error);
// });

// creating new Data
// sequelize.sync().then(() => {
//     Tutorial.create({
//         title: "Title1",
//         description : "description",
//         published : true
//     }).then(res=>{
//         console.log(res)
//     })
// }).catch((error) => {
// console.error('Unable to create table : ', error);
// });

// get all data
// sequelize.sync().then(() => {
//     Tutorial.findAll().then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//     });
// }).catch((error) => {
// console.error('Unable to create table : ', error);
// });

// find 1 data
// sequelize.sync().then(() => {
//     Tutorial.findOne({
//         where : {
//             id: 1
//         }
//     }).then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('No data : ', error);
//     });
// }).catch((error) => {
// console.error('Unable to create table : ', error);
// });

// update data
// sequelize.sync().then(() => {
//     Tutorial.destroy({
//         where : {
//             id: 1
//         }
//     }).then(res => {
//         console.log("Successfully deleted record.")
//     }).catch((error) => {
//         console.error('Failed to delete record : ', error);
//     });
// }).catch((error) => {
// console.error('Unable to create table : ', error);
// });



