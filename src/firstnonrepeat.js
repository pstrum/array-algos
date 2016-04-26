var nonRepeatModule = module.exports = {

  findNonRepeat: function nonRepeat(str) {
    var strArray = str.split("");
    var firstNonRepeat;

    for (var i = 0; i < strArray.length; i++) {
      var elemReg = new RegExp(strArray[i], "gi");
      var matches = str.match(elemReg);
      var count = matches.length;
      if (count === 1) {
        firstNonRepeat = strArray[i];
        break;
      }
    }
    return firstNonRepeat;
  }

};
