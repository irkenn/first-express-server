const express = require('express');
const { Calculation, AppError } = require('./utils');

const app = express();

// Routes 

app.get('/mean', function(req, res, next){
    try{
        let result = Calculation.mean(req.query.nums);
        return res.status(200).json(result);
    }
    catch(err){
        return next(err);
    }
});


app.get('/median', function(req, res, next){
    try{
        let result = Calculation.median(req.query.nums);
        return res.status(200).json(result);
    }
    catch(err){
        return next(err);
    }
});


app.get('/mode', function(req, res, next){
    try{
        let result = Calculation.mode(req.query.nums);
        return res.status(200).json(result);
    }
    catch(err){
        return next(err);
    }
});


// Error handling and listeners

app.use((error, req, res, next) => {
    res.status(error.status).send(error.msg)
})

app.listen(3000, function(){

})