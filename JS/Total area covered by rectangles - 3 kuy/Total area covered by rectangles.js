/**
 * Calculates the area covered by the union of axis-aligned rectangles.
 *
 * @param {number[][]} recs
 * @returns {number}
 */
function calculate(recs) {
    if (recs.length === 0) {
        return 0;
    }

    // Events:
    // [x, +1/-1, y1, y2]
    // +1 -> rectangle starts
    // -1 -> rectangle ends
    const events = [];
    const ys = [];

    for (const [x1, y1, x2, y2] of recs) {
        // Ignore degenerate rectangles
        if (x1 === x2 || y1 === y2) {
            continue;
        }

        events.push([x1, 1, y1, y2]);
        events.push([x2, -1, y1, y2]);

        ys.push(y1, y2);
    }

    if (events.length === 0) {
        return 0;
    }

    // Coordinate compression for Y
    ys.sort((a, b) => a - b);

    const uniqueY = [];

    for (const y of ys) {
        if (
            uniqueY.length === 0 ||
            uniqueY[uniqueY.length - 1] !== y
        ) {
            uniqueY.push(y);
        }
    }

    // Sort events by X
    events.sort((a, b) => a[0] - b[0]);

    /*
     * Between uniqueY[i] and uniqueY[i + 1]
     * there is one elementary segment.
     */
    const segments = uniqueY.length - 1;

    // Segment tree
    const coverCount = new Int32Array(segments * 4 + 4);
    const coveredLength = new Float64Array(segments * 4 + 4);

    /**
     * Updates interval [ql, qr)
     */
    function update(node, left, right, ql, qr, delta) {
        // No intersection
        if (qr <= left || right <= ql) {
            return;
        }

        // Full coverage of this node
        if (ql <= left && right <= qr) {
            coverCount[node] += delta;
        } else {
            const mid = (left + right) >> 1;

            update(node * 2, left, mid, ql, qr, delta);
            update(node * 2 + 1, mid, right, ql, qr, delta);
        }

        // If covered by at least one rectangle,
        // the whole interval is covered.
        if (coverCount[node] > 0) {
            coveredLength[node] =
                uniqueY[right] - uniqueY[left];
        }
        // Leaf
        else if (right - left === 1) {
            coveredLength[node] = 0;
        }
        // Otherwise combine children
        else {
            coveredLength[node] =
                coveredLength[node * 2] +
                coveredLength[node * 2 + 1];
        }
    }

    // Binary search of compressed Y coordinate
    function getYIndex(y) {
        let left = 0;
        let right = uniqueY.length - 1;

        while (left < right) {
            const mid = (left + right) >> 1;

            if (uniqueY[mid] < y) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    let area = 0;
    let previousX = events[0][0];
    let i = 0;

    while (i < events.length) {
        const currentX = events[i][0];

        /*
         * Between previousX and currentX
         * the covered Y-length is constant.
         */
        area +=
            (currentX - previousX) *
            coveredLength[1];

        // Process all events at the same X
        while (
            i < events.length &&
            events[i][0] === currentX
        ) {
            const [, delta, y1, y2] = events[i];

            const left = getYIndex(y1);
            const right = getYIndex(y2);

            update(
                1,
                0,
                segments,
                left,
                right,
                delta
            );

            i++;
        }

        previousX = currentX;
    }

    return area;
}

module.exports = calculate;