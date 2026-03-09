const { assert, config } = require('chai');
config.truncateThreshold = 0;
const frame = require('./Create a frame - 6 kuy');

describe('Basic testing', () => {
    let tests = [
        {
            array: ['Small', 'frame'],
            character: '~',
            output: '~~~~~~~~~\n~ Small ~\n~ frame ~\n~~~~~~~~~',
        },
        {
            array: ['Create', 'this', 'kata'],
            character: '+',
            output: '++++++++++\n+ Create +\n+ this   +\n+ kata   +\n++++++++++',
        },
        {
            array: ['This is a very long single frame'],
            character: '-',
            output: '------------------------------------\n- This is a very long single frame -\n------------------------------------',
        },
    ];

    for (let test of tests) {
        it(`Words: ${test.array}; character: '${test.character}'`, function () {
            let userResult = frame(test.array, test.character);
            test.test = userResult === test.output;
            if (!test.test) {
                console.log(
                    `<LOG::Input>Array:\n  [${test.array.map((w) => `"${w}"`).join(', ')}]\nCharacter: '${test.character}'`.replace(
                        '\n',
                        '<:LF:>',
                    ),
                );
                console.log(
                    `<LOG::Expected>${test.output.replace('\n', '<:LF:>')}\n`,
                );
                console.log(
                    `<TAB::Actual>${(userResult || '[no result]').replace('\n', '<:LF:>')}\n`,
                );
            }
            assert(test.test, 'Your result is not a correct frame');
        });
    }
});
