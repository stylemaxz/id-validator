var app = require('express')();

app.get('/hello/:id', function(req,res){
  var id = req.params.id;
  var string1 = parseInt(id[0])*13;
  var string2 = parseInt(id[1])*12;
  var string3 = parseInt(id[2])*11;
  var string4 = parseInt(id[3])*10;
  var string5 = parseInt(id[4])*9;
  var string6 = parseInt(id[5])*8;
  var string7 = parseInt(id[6])*7;
  var string8 = parseInt(id[7])*6;
  var string9 = parseInt(id[8])*5;
  var string10 = parseInt(id[9])*4;
  var string11 = parseInt(id[10])*3;
  var string12 = parseInt(id[11])*2;

  var check = parseInt(id[12]);
  var number = string1+string2+string3+string4+string5+string6+string7+string8+string9+string10+string11+string12;
  var buffer = number%11;
  var check1 = 11-buffer;

  if(check1 == check){
    res.send('Check is '+check+'<br>Buffer is '+buffer+'<br>Correct Number is '+check1);
  }
  res.send('Check is '+check+'<br>Buffer is '+buffer+'<br>Incorrect Number is '+check1);
  //res.send('Hello '+req.params.name+',your age is: '+(2016-req.params.years));
})

app.listen(5000);
