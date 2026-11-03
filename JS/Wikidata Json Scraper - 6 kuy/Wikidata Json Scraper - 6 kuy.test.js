const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function testPage(id, expected = {}, revision = null) {
    return async function() {
        const url = `https://www.wikidata.org/wiki/Special:EntityData/${id}.json${revision ? `?revision=${revision}` : ''}`;
        const result = await wikidataScraper(url);

        assert.deepEqual(result, expected);
    };
};

describe("Fixed Tests", function() {
    describe("Example Page", function() {
        it("Q42", function() {
            const revision = "2550809167";
            testPage(
                "Q42", {
                    id: "Q42",
                    label: "Douglas Adams",
                    description: "British science fiction writer and humorist (1952–2001)"
                },
                revision
            )
        });
    });


    describe("JSON Pages with All Needed Information", function() {
        it("Q2", function() {
            const revision = "2486557082";
            testPage(
                "Q2", {
                    id: "Q2",
                    label: "Earth",
                    description: "third planet from the Sun in the Solar System",
                },
                revision
            )
        });

        it("Q513", function() {
            const revision = "2484484731";
            testPage(
                "Q513", {
                    id: "Q513",
                    label: "Mount Everest",
                    description: "Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas",
                },
                revision
            )
        });
    });

    describe("Edge Cases", function() {
        it("Edge-Case: No 'en' Label", function() {
            const revision = "2468580453";
            testPage(
                "Q26013179", {
                    id: "Q26013179",
                    label: "No Label",
                    description: "Wikimedia template",
                },
                revision
            )
        });
        it("Edge-Case: No 'en' Description", function() {
            const revision = "920222854";
            testPage(
                "Q62849465", {
                    id: "Q62849465",
                    label: "BC1G_15416",
                    description: "No Description",
                },
                revision
            )
        });
        it("Edge-Case: No 'en' Label or Description", function() {
            const revision = "1424262322";
            testPage(
                "Q88627685", {
                    id: "Q88627685",
                    label: "No Label",
                    description: "No Description",
                },
                revision
            )
        });
    });
});