class GroupByDifference {
    constructor(numbers) {
        this.numbers = numbers || [];
    }

    find(difference) {
        if (this.numbers.length === 0) return [];

        // сортуємо масив
        const sorted = [...this.numbers].sort((a, b) => a - b);

        // залишаємо лише ті елементи, які мають сусіда в межах difference
        const result = sorted.filter((num, idx) => {
            const prev = sorted[idx - 1];
            const next = sorted[idx + 1];
            return (prev !== undefined && Math.abs(num - prev) <= difference) ||
                   (next !== undefined && Math.abs(num - next) <= difference);
        });

        return result;
    }
}

module.exports = GroupByDifference;