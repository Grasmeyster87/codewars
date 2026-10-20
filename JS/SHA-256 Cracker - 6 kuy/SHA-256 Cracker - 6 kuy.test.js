const { strictEqual } = require('chai').assert;
const sha256Cracker = require('./SHA-256 Cracker - 6 kuy')

function doTest(hash, chars, expected) {
	const actual = sha256Cracker(hash, chars);
	strictEqual(actual, expected, `for hash = ${hash}\nand chars = ${chars}\n`);
}

describe("Basic Tests", function () {
	it("Can be cracked with given characters", function () {
		doTest("b8c49d81cb795985c007d78379e98613a4dfc824381be472238dbd2f974e37ae", "deGioOstu", "GoOutside");
	});
	it("Cannot be cracked with given characters", function () {
		doTest("f58262c8005bb64b8f99ec6083faf050c502d099d9929ae37ffed2fe1bb954fb", "abc", null);
		doTest("92435990a8f2a13d8b2e27a46e7b8912029d68b01504f80776bacb12ef1864e9", "demo", null);
	});
});