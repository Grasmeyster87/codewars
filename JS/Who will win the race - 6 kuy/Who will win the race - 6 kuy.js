/* function whoWillWin(arr) {
    let minTime = 0;
    let positionWinner = -1;
    for (let i = 0; i < arr.length; i++){
         let time = parseFloat(arr[i].distanceToRun) / parseFloat(arr[i].speed);
         mintime = (minTime === 0 || time < minTime) ? time : minTime;
         positionWinner = (minTime === 0 || time < minTime) ? i : positionWinner;
    }
    return `${arr[positionWinner].name} won the race in ${mintime} second(s)!`
} */

function whoWillWin(arr) {
    if (!arr || arr.length === 0) return "No one raced!";

    const results = [];
    for (const racer of arr) {
        const speed = parseFloat(racer.speed);       // e.g. "1 meter(s) per second"
        const distance = parseFloat(racer.distanceToRun); // e.g. "1000 meters"

        if (speed <= 0 || distance <= 0) continue; // disqualified
        const time = distance / speed;
        results.push({ name: racer.name, time });
    }

    if (results.length === 0) return "Everyone was disqualified!";

    // Find minimal time
    let minTime = results[0].time;
    for (let i = 1; i < results.length; i++) {
        if (results[i].time < minTime) minTime = results[i].time;
    }

    // Tie detection on exact time (with tiny epsilon to avoid fp noise),
    // NOT on rounded time.
    const EPS = 1e-12;
    const winners = results.filter(r => Math.abs(r.time - minTime) <= EPS);

    const roundedTime = Math.round(minTime);

    if (winners.length > 1) {
        return `${winners.length} people tied in ${roundedTime} second(s)!`;
    } else {
        return `${winners[0].name} won the race in ${roundedTime} second(s)!`;
    }
}

let res = whoWillWin([
      {name:"Alex",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"6 meter(s) per second",distanceToRun:"300 meter(s)"},
      {name:"Timmy",speed:"4 meter(s) per second",distanceToRun:"200 meter(s)"},
      {name:"Ben",speed:"2 meter(s) per second",distanceToRun:"68 meter(s)"},
    ])
    console.log(res);
module.exports = whoWillWin;
