var test = require('tape');
var nrModule = require(__dirname + '/../src/firstnonrepeat');

test('find the first character that does not repeat', function(t) {
  t.plan(1);

  var testString = nrModule.findNonRepeat("teEter");

  t.equal(testString, "r");
})
