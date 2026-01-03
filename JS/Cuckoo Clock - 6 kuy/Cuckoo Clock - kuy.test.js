const chai = require('chai');
const expect = chai.expect;
const cuckooClock = require('./Cuckoo Clock - 6 kuy');

describe('Tests', function () {
    it('Simple Tests', function () {
        const initialTimes = ['07:22', '12:22', '01:30', '04:01', '03:38'];
        const chimes = [1, 2, 2, 10, 19];
        const expectedTimes = ['07:30', '12:45', '01:45', '05:30', '06:00'];

        for (let i = 0; i < initialTimes.length; i++)
            expect(cuckooClock(initialTimes[i], chimes[i])).to.equal(
                expectedTimes[i]
            );
    });

    it('Starting on the Hour', function () {
        const initialTimes = ['10:00', '10:00', '10:00', '10:00', '10:00'];
        const chimes = [1, 10, 11, 13, 20];
        const expectedTimes = ['10:00', '10:00', '10:15', '10:45', '11:00'];

        for (let i = 0; i < initialTimes.length; i++)
            expect(cuckooClock(initialTimes[i], chimes[i])).to.equal(
                expectedTimes[i]
            );
    });

    it('Crossing Twelve', function () {
        // From "12:MM" to "01:NN"
        const initialTimes = ['12:30', '12:30', '12:30', '12:30', '09:53'];
        const chimes = [1, 2, 3, 4, 50];
        const expectedTimes = ['12:30', '12:45', '01:00', '01:15', '02:30'];

        for (let i = 0; i < initialTimes.length; i++)
            expect(cuckooClock(initialTimes[i], chimes[i])).to.equal(
                expectedTimes[i]
            );
    });

    it('Around the Clock', function () {
        // From "HH:MM" to "HH:NN" 12 hours later
        const initialTimes = ['08:17', '08:17', '08:17', '08:17', '08:17'];
        const chimes = [113, 114, 115, 150, 200];
        const expectedTimes = ['08:00', '08:15', '08:30', '11:00', '05:45'];

        for (let i = 0; i < initialTimes.length; i++)
            expect(cuckooClock(initialTimes[i], chimes[i])).to.equal(
                expectedTimes[i]
            );
    });
});
