# Algorithm Challenges

## Find Duplicate

In the `src` directory is a `quicksort_module` that contains my functions to `swap`, `partition`, `sort`, and `findDuplicates`. Then, in the `find_duplicate` file is an example of using those functions to return the duplicate value.

Of the many ways to solve this problem, I chose the path of creating my quicksort because it offers the most flexibility and can be refactored to actually include a check for duplicates.

## First Non Repeating Character

Again, in the `src` directory is a `firstnonrepeat` module that contains my function that (1) splits a string, (2) loops through the array and pushes matches to an array, (3) if those matches are only 1 in `length` the loop breaks and the character is returned.

## Tests

Unit tests are done with Tape. See the package.json for which version I used.
