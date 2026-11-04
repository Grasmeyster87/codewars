function findMissing(list) {
    if (list.length == 0) {
        return 0;
    }

    let result = 0;
    let stepArr = [];
    let step = 0;
    let index = 0;

    for (let i = 0; i < list.length - 1; i++) {
        stepArr.push(list[i + 1] - list[i]);
    }
    if (stepArr.length < 3) {
        step = Math.min(...stepArr);
        index = stepArr.indexOf(Math.max(...stepArr));
        result = list[index] + step;
    }
    if (stepArr.length >= 3) {
        const freq = {};

        for (const step of stepArr) {
            freq[step] = (freq[step] || 0) + 1;
        }
        step = Number(
            Object.entries(freq).find(([key, value]) => value > 1)?.[0],
        );
        let indexValue = Object.entries(freq).find(
            ([key, value]) => value === 1,
        )?.[0];
        index = stepArr.indexOf(Number(indexValue));
        result = list[index] + step;
    }
    return result;
}

module.exports = findMissing;
