/**
 * Get a random number between the range of numbers.
 * @param {Number} min Minimum value of the range.
 * @param {Number} max Maximum value of the range.
 * @returns {Number} Returns a random number that falls in the range.
 */
function random_number_between(min, max) {
    const number = Math.random() * (max - min) + min;
    return Math.floor(number);
}

/**
 * Paint lines with Bresenham's line algorithm to everithing cases.
 * @param {Number} x1 x-value of the fist point.
 * @param {Number} y1 y-value of the fist point.
 * @param {Number} x2 x-value of the second point.
 * @param {Number} y2 y-value of the second point.
 */
function line_bresenham(x1, y1, x2, y2) {
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;
    var err = dx - dy;

    while (true) {
        context.fillRect(x1, y1, 1, 1);

        if ((x1 === x2) && (y1 === y2)) break;

        var e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy;
            x1 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y1 += sy;
        }
    }
}