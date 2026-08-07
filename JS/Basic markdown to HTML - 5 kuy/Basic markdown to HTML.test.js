describe('Tests', function () {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;
    const format = require('./Basic markdown to HTML');

    it('sample tests', function () {
        assert.strictEqual(
            format(
                'blandit luctus. Sed a eros eget arcu laoreet suscipit. Maecenas ac urna tincidunt, fermentum',
            ),
            '< p>blandit luctus. Sed a eros eget arcu laoreet suscipit. Maecenas ac urna tincidunt, fermentum< /p>',
            'Should work for text without markup',
        );
        assert.strictEqual(
            format(
                '# dolor sit amet, consectetur adipiscing elit. Integer a neque eros. Integer pellentesque leo',
            ),
            '< h1>dolor sit amet, consectetur adipiscing elit. Integer a neque eros. Integer pellentesque leo< /h1>',
            'Should work for level-1 header',
        );
        assert.strictEqual(
            format(
                '## consectetur adipiscing elit. Integer a neque eros. Integer pellentesque leo',
            ),
            '< h2>consectetur adipiscing elit. Integer a neque eros. Integer pellentesque leo< /h2>',
            'Should work for level-2 header',
        );
        assert.strictEqual(
            format('### sed, viverra'),
            '< h3>sed, viverra< /h3>',
            'Should work for level-3 header',
        );
        assert.strictEqual(
            format('#### Class aptent'),
            '< h4>Class aptent< /h4>',
            'Should work for level-4 header',
        );
        assert.strictEqual(
            format(
                '##### rutrum mi eu, finibus interdum tortor. Class aptent taciti sociosqu ad',
            ),
            '< h5>rutrum mi eu, finibus interdum tortor. Class aptent taciti sociosqu ad< /h5>',
            'Should work for level-5 header',
        );
        assert.strictEqual(
            format(
                '###### pellentesque leo ac blandit luctus. Sed a eros eget arcu laoreet',
            ),
            '< h6>pellentesque leo ac blandit luctus. Sed a eros eget arcu laoreet< /h6>',
            'Should work for level-6 header',
        );
        assert.strictEqual(
            format(
                '####### Maecenas erat dolor, euismod rutrum mi eu, finibus interdum tortor.',
            ),
            '< h6>Maecenas erat dolor, euismod rutrum mi eu, finibus interdum tortor.< /h6>',
            'Should for strings starting with more than 6 hashtags',
        );
        assert.strictEqual(
            format('* eget'),
            '< li>eget< /li>',
            'Should work for list items',
        );
        assert.strictEqual(
            format(
                '**ad litora torquent per conubia nostra, per inceptos himenaeos.**',
            ),
            '< p>< strong>ad litora torquent per conubia nostra, per inceptos himenaeos.< /strong>< /p>',
            'Should work for strings with emphasis',
        );
        assert.strictEqual(
            format(
                '# **ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas rutrum nisl eu**',
            ),
            '< h1>< strong>ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas rutrum nisl eu< /strong>< /h1>',
            'Should work for strings with emphasis',
        );
        assert.strictEqual(
            format('* **pellentesque**'),
            '< li>< strong>pellentesque< /strong>< /li>',
            'Should work for strings with emphasis',
        );
        assert.strictEqual(
            format(
                'suscipit. Maecenas ac urna tincidunt, **fermentum** massa sed, viverra elit. Maecenas',
            ),
            '< p>suscipit. Maecenas ac urna tincidunt, < strong>fermentum< /strong> massa sed, viverra elit. Maecenas< /p>',
            'Should work for strings with partial emphasis',
        );
        assert.strictEqual(
            format('# rutrum mi eu, **finibus interdum** tortor. Class aptent'),
            '< h1>rutrum mi eu, < strong>finibus interdum< /strong> tortor. Class aptent< /h1>',
            'Should work for strings with partial emphasis',
        );
        assert.strictEqual(
            format('* elit. Maecenas **e**rat dolor,'),
            '< li>elit. Maecenas < strong>e< /strong>rat dolor,< /li>',
            'Should work for strings with partial emphasis',
        );
        assert.strictEqual(
            format(
                'eros eget arcu **laoreet** suscipit. Maecenas ac urna tincidunt, **fermentum** massa sed, viverra',
            ),
            '< p>eros eget arcu < strong>laoreet< /strong> suscipit. Maecenas ac urna tincidunt, < strong>fermentum< /strong> massa sed, viverra< /p>',
            'Should work for strings where 2 parts of the string are emphasized',
        );
        assert.strictEqual(
            format(
                '# pellentesque leo ac **blandit luctus**. Sed a eros eget **arcu laoreet suscipit. Maecenas ac**',
            ),
            '< h1>pellentesque leo ac < strong>blandit luctus< /strong>. Sed a eros eget < strong>arcu laoreet suscipit. Maecenas ac< /strong>< /h1>',
            'Should work for strings where 2 parts of the string are emphasized',
        );
        assert.strictEqual(
            format(
                '* **himenaeos. Maecenas** rutrum **nisl eu** bibendum sodales',
            ),
            '< li>< strong>himenaeos. Maecenas< /strong> rutrum < strong>nisl eu< /strong> bibendum sodales< /li>',
            'Should work for strings where 2 parts of the string are emphasized',
        );
        assert.strictEqual(
            format('rutrum mi e*u, finibus **inter**dum**'),
            '< p>rutrum mi e*u, finibus < strong>inter< /strong>dum**< /p>',
            'Should work when string contains random asterisks',
        );
        assert.strictEqual(
            format('****'),
            '< p>****< /p>',
            'Compound asterisks 1',
        );
        assert.strictEqual(
            format('*****'),
            '< p>< strong>*< /strong>< /p>',
            'Compound asterisks 2',
        );
        assert.strictEqual(
            format('* ** *** **** *****'),
            '< li>< strong> < /strong>* < strong>** < /strong>***< /li>',
            'Compound asterisks 3',
        );
        assert.strictEqual(
            format('***** **** *** ** *'),
            '< p>< strong>*< /strong> < strong>** < /strong>* ** *< /p>',
            'Compound asterisks 4',
        );
    });
});
