var test = require('tape');
var qsModule = require(__dirname + '/../src/quicksort');
var qsDupModule = require(__dirname + '/../src/quicksortdup.js');
var example = require(__dirname + '/../src/example');

test('swap the position of two elements', function (t) {
  t.plan(1);

  var testArray = [4, 2, 3, 5, 6, 9];
  var swapTest = qsModule.swap(testArray, 4, 4);

  t.deepEqual(testArray, [4, 2, 3, 5, 6, 9]);
})

test('partition an array', function(t) {
  t.plan(1);

  var testArray = [4, 2, 3, 5, 6, 9];
  var partitionTest = qsModule.partition(testArray, 0, 3);

  t.equal(partitionTest, 1);

})

test('sort an unsorted array', function(t) {
  t.plan(1);

  var testArray = [4, 2, 3, 6, 5, 3, 9, 1, 2];
  var sortTest = qsModule.sort(testArray, 0, testArray.length - 1);

  t.deepEqual(sortTest, [1, 2, 2, 3, 3, 4, 5, 6, 9]);
})

test('find duplicate in an array', function(t) {
  t.plan(1);

  var testArray = [1, 2, 3, 4, 5, 6, 6, 7, 8, 10];
  var dupTest = qsModule.findDuplicates(testArray);

  t.deepEqual(dupTest, 6);
})

test('example produces duplicate', function(t) {
  t.plan(1);

  var exampleAnswer = example();

  t.equal(exampleAnswer, 9);
})
