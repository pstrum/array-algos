//function randomNumber(min, max) {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
//}

var testArrayModule = module.exports = {

  createArray: function createArray(length, duplicate) {
    'use strict';
    var myArray = [];
    for (var i = 1; i < length; i++) {
      //var randomNum = randomNumber(1, length)
      myArray.push(i);
    }
    if (duplicate <= length) {
      var position = myArray.indexOf(duplicate);
      myArray.splice(position, 0, duplicate);
    } else {
      console.log("No duplicate entered, or duplicate not in range");
    }
    return myArray;
  }

};
