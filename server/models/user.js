const mongoose = require('mongoose');

const User =mongoose.model('User',
{
     email:{type:String,required:true,trim:true,minlength:1}
});

const app = new User
({
     email:'    kaka@gmail.com  '
});

app.save().then((doc) =>
 {
      console.log("Saved from user file:",doc);
 },(e)=>
 {
      console.log('Unable to save',e);
 });

 module.exports = {User};