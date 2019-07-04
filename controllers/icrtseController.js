module.exports = function (app){
    app.get('/icrtse2020', function(req, res){
        res.render('home');
    });
}