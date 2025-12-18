function citySurfaceArea(_map) {
    const rows = _map.length;
    const cols = _map[0].length;
    let area = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const h = _map[i][j];

            // верхня поверхня завжди (земля або дах будівлі)
            area += 1;

            // вертикальні боки: різниця висот із сусідами і межі
            // вверх
            const up = i > 0 ? _map[i - 1][j] : 0;
            area += Math.max(h - up, 0);

            // вниз
            const down = i < rows - 1 ? _map[i + 1][j] : 0;
            area += Math.max(h - down, 0);

            // вліво
            const left = j > 0 ? _map[i][j - 1] : 0;
            area += Math.max(h - left, 0);

            // вправо
            const right = j < cols - 1 ? _map[i][j + 1] : 0;
            area += Math.max(h - right, 0);
        }
    }

    return area;
}

module.exports = citySurfaceArea;
