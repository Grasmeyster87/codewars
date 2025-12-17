function upperTriangular(mat) {
    const n = mat.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (mat[i][j] !== 0) return false;
        }
    }
    return true;
}

function lowerTriangular(mat) {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (mat[i][j] !== 0) return false;
        }
    }
    return true;
}

module.exports = {
    upperTriangular,
    lowerTriangular,
};
