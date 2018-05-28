//app.js
var Bmob = require('utils/bmob/bmob.js');
Bmob.initialize("1359d157181aef9a565dcfe49912fa8f", "3cc62f783c3f7e12ed1c7366d04c8070");

App({
  globalData:{
    bookedRooms:[],
    orderNum:3
  }
})