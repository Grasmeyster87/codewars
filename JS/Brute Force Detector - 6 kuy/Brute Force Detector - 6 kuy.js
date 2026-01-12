function detectBruteForce(logs) {
    if (logs.length === 0) return [];

    const counters = {};   // лічильники невдалих спроб для кожного IP
    const suspicious = new Set();

    for (const log of logs) {
        const [ip, status] = log.split(" ").slice(0, 2);

        if (status === "LOGIN_FAIL") {
            counters[ip] = (counters[ip] || 0) + 1;
            if (counters[ip] >= 3) {
                suspicious.add(ip);
            }
        } else if (status === "LOGIN_SUCCESS") {
            counters[ip] = 0; // скидання лічильника
        }
    }

    return Array.from(suspicious).sort();
}

const logs = [
    '10.0.0.5 LOGIN_FAIL user=x',
    '10.0.0.5 LOGIN_FAIL user=x',
    '10.0.0.5 LOGIN_SUCCESS user=x',
    '10.0.0.5 LOGIN_FAIL user=x',
    '10.0.0.4 LOGIN_FAIL user=x',
    '10.0.0.4 LOGIN_FAIL user=x',
];
console.log(detectBruteForce(logs));
module.exports = detectBruteForce;
