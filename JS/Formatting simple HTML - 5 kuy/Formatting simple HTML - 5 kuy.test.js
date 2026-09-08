const { assert } = require('chai');
const indent = require('./Formatting simple HTML - 5 kuy');

describe('formatting simple HTML', () => {
    const test = (source) => (expected) =>
        it('example test', () => {
            const actual = indent(source);
            console.log(
                'source:<br><br>' +
                    escWS(escHTML(source)) +
                    '<hr>expected:<br><br>' +
                    escHTML(expected) +
                    '<hr>actual:<br><br>' +
                    escHTML(actual),
            );
            if (actual !== indent(actual))
                assert(
                    false,
                    'Sanity check failed: repeated application changes output',
                );
            assert.strictEqual(actual, expected);
        });
    test('')('');
    test('<br />')('<br />\n');
    test('<br /><br /><br />')('<br />\n<br />\n<br />\n');
    test('text<br />text<br /><br />')('text<br />\ntext<br />\n<br />\n');
    test(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    )(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
    );
    test(
        'Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />',
    )(
        'Lorem ipsum dolor sit amet,<br />\nconsectetur adipiscing elit,<br />\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />\n',
    );
    test(
        '<p>Lorem ipsum dolor sit amet,</p><p>consectetur adipiscing elit,</p><p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    )(
        '<p>\n  Lorem ipsum dolor sit amet,\n</p>\n<p>\n  consectetur adipiscing elit,\n</p>\n<p>\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n</p>\n',
    );
    test('<html><head></head><body></body></html>')(
        '<html>\n  <head>\n  </head>\n  <body>\n  </body>\n</html>\n',
    );
    test(
        '<html><head><title>Title</title></head><body><div><p>Paragraph</p><p>Another\nparagraph</p>Another <img src="http://somewhere on the wild weird web" /> paragraph</div></body></html>',
    )(
        '<html>\n  <head>\n    <title>\n      Title\n    </title>\n  </head>\n  <body>\n    <div>\n      <p>\n        Paragraph\n      </p>\n      <p>\n        Another paragraph\n      </p>\n      Another\n      <img src="http://somewhere on the wild weird web" />\n      paragraph\n    </div>\n  </body>\n</html>\n',
    );
    test(
        '<p>text<br /><table><tr><td>cell</td></tr></table><hr /><br />more text</p>',
    )(
        '<p>\n  text<br />\n  <table>\n    <tr>\n      <td>\n        cell\n      </td>\n    </tr>\n  </table>\n  <hr />\n  <br />\n  more text\n</p>\n',
    );
    test(`<html>
<head>
	<meta charset="utf-8" />
	<meta name="application-name" content="PCMNMap-0.1.3" />
	<link rel="icon" href="mountains.ico" />
	<title>Map</title>
	<script src="https://maps.google.com/maps/api/js"></script>
	<script>removed</script>
</head>
<body>
	<div id="map" style="width:100%; height:100%;"></div>
</body>
</html>`)(
        `<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="application-name" content="PCMNMap-0.1.3" />\n    <link rel="icon" href="mountains.ico" />\n    <title>\n      Map\n    </title>\n    <script src="https://maps.google.com/maps/api/js">\n    </script>\n    <script>\n      removed\n    </script>\n  </head>\n  <body>\n    <div id="map" style="width:100%; height:100%;">\n    </div>\n  </body>\n</html>\n`,
    );
    test(
        `<p>As an <a  href="/wiki/Esoteric_programming_language"  title="Esoteric programming language">esoteric programming language</a>,  Unlambda is meant as a demonstration of very pure functional programming rather than for practical use.  Its main feature is the lack of conventional operators and data types  —  the only kind of data in the program are one-parameter functions.   Data can nevertheless be simulated with appropriate functions as in the <a href="/wiki/Lambda_calculus" title="Lambda calculus">lambda calculus</a>.  Multi-parameter functions can be represented via the method of <a href="/wiki/Currying" title="Currying">currying</a>.  </p>`,
    )(
        `<p>\n  As an\n  <a  href="/wiki/Esoteric_programming_language"  title="Esoteric programming language">\n    esoteric programming language\n  </a>\n  , Unlambda is meant as a demonstration of very pure functional programming rather than for practical use. Its main feature is the lack of conventional operators and data types — the only kind of data in the program are one-parameter functions. Data can nevertheless be simulated with appropriate functions as in the\n  <a href="/wiki/Lambda_calculus" title="Lambda calculus">\n    lambda calculus\n  </a>\n  . Multi-parameter functions can be represented via the method of\n  <a href="/wiki/Currying" title="Currying">\n    currying\n  </a>\n  .\n</p>\n`,
    );
});
