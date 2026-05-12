const { assert, config } = require('chai');
config.truncateThreshold = 0;
const submitOrder = require('./Promises Made and Broken The Misadventures of Bob the Highly Paid Consultant - 6 kuy');

beforeEach(async function () {
    submitOrder(12345);
    await (function delay() {
      return new Promise(resolve => setTimeout(resolve, 2_000));
    })();
});

describe("Shopping Cart Retrieval", function() {
    it("Should retrieve the correct cart", function() {
        assert(PromiseChecks.getShoppingCartAsyncSucceeded(), "Shopping cart was not successfully retrieved");
    });
});

describe("Profile Retrieval", function() {
    it("Should retrieve the correct profile", function() {
        assert(PromiseChecks.getProfileAsyncSucceeded(), "Profile was not successfully retrieved");
    });
});

describe("Shipping Calculation", function() {
    it("Should send in the correct cart", function() {
        assert(PromiseChecks.calculateShippingCorrectCart(), "An invalid shopping cart was provided");
    });
    it("Should send in the correct ZIP code", function() {
        assert(PromiseChecks.calculateShippingCorrectZip(), "An invalid ZIP code was provided");
    });
});

describe("Order Submission", function() {
    it("Should successfully submit the order", function() {
        assert(PromiseChecks.placeOrderAsyncSucceeded(), "Order was not successfully submitted");
    });
});