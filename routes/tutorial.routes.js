module.exports = app =>{
    const tutorials = require('../controllers/tutorial.controller')

    var router = require('express').Router();

    app.use('/', tutorials.create);
    app.use('/', tutorials.findAll);
    app.use('/', tutorials.findAllPublished);
    app.use('/', tutorials.findOne);
    app.use('/', tutorials.delete);
    app.use('/', tutorials.deleteAll);
    app.use('/api/tutorials', router);
}