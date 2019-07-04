var fs = require('fs')
var mongoose = require('mongoose');

var rawdata = fs.readFileSync('json/palakkad.json');  
var palakkad = JSON.parse(rawdata);  
var rawdata = fs.readFileSync('json/notifications.json');
var notification = JSON.parse(rawdata);
console.log(notification);  

module.exports = function (app){    

    app.get('/icrtse2020', function(req, res){
        res.render('home', {palakkad : palakkad, notification : notification});
    });

    app.get('/home', function(req, res){
        res.redirect('icrtse2020')
    });

    app.get('/index', function(req, res){
        res.redirect('icrtse2020')
    });

    app.get('*', function(req, res){
        res.render('404', {palakkad : palakkad, notification : notification});
    });

    
}