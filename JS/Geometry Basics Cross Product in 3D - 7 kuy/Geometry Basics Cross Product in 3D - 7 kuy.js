let VectorConstructor;

if (typeof Vector !== 'undefined') {
    VectorConstructor = Vector;
} else {
    VectorConstructor = class Vector {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    };
}

function crossProduct(v1, v2) {
    const x = v1.y * v2.z - v1.z * v2.y;
    const y = v1.z * v2.x - v1.x * v2.z;
    const z = v1.x * v2.y - v1.y * v2.x;
    return new VectorConstructor(x, y, z);
}

module.exports = crossProduct;
module.exports.Vector = VectorConstructor;