var quicksortModule = module.exports = {

  swap: function swap(someArray, index1, index2) {
    var first = someArray[index1];
    someArray[index1] = someArray[index2];
    someArray[index2] = first;
  },

  partition: function partition(someArray, lpoint, rpoint) {
    var pivotIdx = Math.floor((lpoint + rpoint) / 2);
    var pivot = someArray[pivotIdx];
    var l = lpoint;
    var r = rpoint;
    while (l <= r) {
      for (l; l <= pivotIdx; l++) {
        if (someArray[l] >= pivot) {
          break;
        }
      }
      for (r; r >= pivotIdx; r--) {
        if (someArray[r] <= pivot) {
          break;
        }
      }
      if (l <= r) {
        this.swap(someArray, l, r);
        l++;
        r--;
      }
    }
    return l;
  },

  sort: function sort(someArray, lpoint, rpoint) {
    var arrlength;
    if (someArray.length > 1) {
      arrlength = this.partition(someArray, lpoint, rpoint);
      if (lpoint < arrlength - 1) {
        this.sort(someArray, lpoint, arrlength - 1);
      }
      if (arrlength < rpoint) {
        this.sort(someArray, arrlength, rpoint);
      }
    }
    console.log(someArray);
    return someArray;
  },

  findDuplicates: function findDup(someArray) {
    var duplicate;
    for (var i = 1; i < someArray.length; i++) {
      if (someArray[i] == someArray[i - 1]) {
        duplicate = someArray[i];
      }
    }
    return duplicate;
  }
};
