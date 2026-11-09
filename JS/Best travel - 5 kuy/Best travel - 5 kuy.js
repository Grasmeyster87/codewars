function chooseBestSum(t, k, ls) {
    const n = ls.length;
    let best = null;

    // Перебір комбінацій по k елементів з відсіканням (всі відстані >= 0)
    const dfs = (start, left, sum) => {
        if (left === 0) {
            if (best === null || sum > best) best = sum;
            return;
        }
        for (let i = start; i <= n - left; i++) {
            const next = sum + ls[i];
            if (next > t) continue; // перевищує ліміт — пропускаємо
            dfs(i + 1, left - 1, next);
        }
    };

    dfs(0, k, 0);
    return best;
}
module.exports = chooseBestSum;