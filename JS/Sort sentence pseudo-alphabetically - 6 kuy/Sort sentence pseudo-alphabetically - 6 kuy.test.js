const { assert } = require('chai');
const sort = require('./Sort sentence pseudo-alphabetically - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(
            sort(
                'I, habitan of the Alleghanies, treating of him as he is in himself in his own rights'
            ),
            'as habitan he him himself his in in is of of own rights the treating I Alleghanies'
        );
        assert.equal(
            sort('take up the task eternal, and the burden and the lesson'),
            'and and burden eternal lesson take task the the the up'
        );
        assert.equal(
            sort(
                'Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!'
            ),
            'and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut',
            'sentence may end with a punctuation'
        );
        assert.equal(
            sort('Pioneers, O Pioneers!'),
            'Pioneers Pioneers O',
            'sentence may end with a punctuation'
        );
    });
});
