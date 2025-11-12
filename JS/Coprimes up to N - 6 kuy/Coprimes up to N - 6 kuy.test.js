

describe("Basic tests", function() {
  Test.assertDeepEquals(coprimes(2), [1]);
  Test.assertDeepEquals(coprimes(3), [1, 2]);
  Test.assertDeepEquals(coprimes(6), [1, 5]);
  Test.assertDeepEquals(coprimes(10), [1, 3, 7, 9]);
  Test.assertDeepEquals(coprimes(20), [1, 3, 7, 9, 11, 13, 17, 19]);
  Test.assertDeepEquals(coprimes(25), [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]);
  Test.assertDeepEquals(coprimes(30), [1, 7, 11, 13, 17, 19, 23, 29]);
});