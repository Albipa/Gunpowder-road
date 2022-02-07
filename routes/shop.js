const path = require('path');

const express = require('express');

const router = express.Router();

var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
   
var date = year + "-" + month + "-" + day;
console.log(date);
    
var hours = date_ob.getHours();
var minutes = date_ob.getMinutes();
var seconds = date_ob.getSeconds();
  
var dateTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
//console.log(dateTime);
const user = {
  firstName: 'Tim',
  lastName: 'Leo',
}

router.get('/', function (req, res, next) {
  res.render('index', {
      
      date: date, 
      dateTime:dateTime,

      user:user
      
  }) 
}

);
router.get("/ftg1", function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'ftg1.html'));



});

module.exports = router;
