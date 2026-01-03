function cuckooClock(inputTime, chimes) {
    let [hours, minutes] = inputTime.split(':').map(Number);
    let count = 0;

    function getChimes(h, m) {
        if (m === 0) return h === 12 ? 12 : h;
        if (m === 15 || m === 30 || m === 45) return 1;
        return 0;
    }

    // враховуємо початковий час
    count += getChimes(hours, minutes);
    if (count >= chimes) {
        return inputTime;
    }

    while (count < chimes) {
        // знайти наступний момент дзвону
        if (minutes < 15) minutes = 15;
        else if (minutes < 30) minutes = 30;
        else if (minutes < 45) minutes = 45;
        else {
            minutes = 0;
            hours += 1;
            if (hours > 12) hours = 1;
        }

        count += getChimes(hours, minutes);
    }

    let hh = String(hours).padStart(2, '0');
    let mm = String(minutes).padStart(2, '0');
    return `${hh}:${mm}`;
}

module.exports = cuckooClock;