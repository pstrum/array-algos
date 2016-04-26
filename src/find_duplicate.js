var testArray = require(__dirname + '/../test/large_array');
var qsModule = require(__dirname + '/quicksort_module');

module.exports = function getAnswer() {
  var exArray = testArray.createArray(1000,9);
  var sortArray = qsModule.sort(exArray, 0, 1000);
  var duplicate = qsModule.findDuplicates(sortArray);
  return duplicate;
};
