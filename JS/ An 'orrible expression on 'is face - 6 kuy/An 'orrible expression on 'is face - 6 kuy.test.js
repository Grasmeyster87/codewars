describe( "Tests", function() {
    const chai = require('chai'), { assert } = chai;
    chai.config.truncateThreshold = 0;
    const {cockney, replacement} = require('./An 'orrible expression on 'is face - 6 kuy');


    function cocknify( input ) { 
      return input.replace( cockney, replacement );
    }

    it( "Well, hello there", function() {
      assert.strictEqual( cocknify( "Well, hello there" ), "Well, `ello there" );
    } );

    it( "hi there", function() {
      assert.strictEqual( cocknify( "hi there" ), "`i there" );
    } );

    it( "hello there", function() {
      assert.strictEqual( cocknify( "hello there" ), "`ello there" );
    } );
});