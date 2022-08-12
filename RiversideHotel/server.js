const express = require('express');
const app = express();

app.listen(5050, function(){
    console.log('listening on 5050')
});

app.get('/home', function(req, res){
    res.send('Home');
});