var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/lively-wolf', function(request, response){
    response.send("lively-wolf");
});


app.listen(process.env.PORT || 4000);