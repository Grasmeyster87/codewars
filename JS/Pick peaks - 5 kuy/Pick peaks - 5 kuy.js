function pickPeaks(arr) {
    let result = { pos: [], peaks: [] };
    let posCandidate = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            // можливий початок піку
            posCandidate = i;
        } else if (arr[i] < arr[i - 1] && posCandidate !== null) {
            // підтверджений пік
            result.pos.push(posCandidate);
            result.peaks.push(arr[posCandidate]);
            posCandidate = null;
        }
    }

    return result;
}
module.exports = pickPeaks;
