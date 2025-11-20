function generateShape(integer) {
    // створюємо рядок з integer плюсів
    const row = "+".repeat(integer);
    // повторюємо цей рядок integer разів, розділяючи переносами рядка
    return Array(integer).fill(row).join("\n");
}

module.exports = generateShape;