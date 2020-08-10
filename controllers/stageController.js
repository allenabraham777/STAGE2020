var fs = require('fs')
var mongoose = require('mongoose');

var rawdata = fs.readFileSync('json/palakkad.json');
var palakkad = JSON.parse(rawdata);
var rawdata = fs.readFileSync('json/notifications.json');
var notification = JSON.parse(rawdata);

module.exports = function (app){

    app.get('/stage2020', function(req, res){
        res.render('home', {palakkad : palakkad, notification : notification});
    });

    app.get('/', function(req, res){
        res.redirect('stage2020')
    });

    app.get('/home', function(req, res){
        res.redirect('stage2020')
    });

    app.get('/winners', function(req, res){
        res.render('winners');
    });

    app.get('/index', function(req, res){
        res.redirect('stage2020')
    });

    app.get('/subchair', function(req, res){
        res.render('subchair', {query : req.query.dep});
    });

    app.get('/committee', function(req, res){
        res.render('committee');
    });
    app.get('/schedule', function(req, res){
        res.render('schedule');
    });
    app.get('/keynote', function(req, res){
        res.render('keynote');
    });
/*
    app.get('/launch', function(req, res){
        res.render('launch');
    });
*/
    app.get('/call_for_paper', function(req, res){
        res.render('paperCall');
    });
    app.get('/contact', function(req, res){
        res.render('contact');
    });
    app.get('/submission', function(req, res){
        res.render('submission');
    });
    app.get('/registration', function(req, res){
        res.render('registration');
    });


    app.get('*', function(req, res){
        res.render('404', {palakkad : palakkad, notification : notification});
    });

}
