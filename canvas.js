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
    var dx = x2 - x1, dy = y2 - y1;
    var x, y;
    var stepX, stepY;

    //Determine the starting point and the end point on Y.
    if (dy < 0) {
        dy *= -1;
        stepY = -1;
    }
    else {
        stepY = 1;
    }

    //Determine the starting point and the end point on X.
    if (dx < 0) {
        dx *= -1;
        stepX = -1;
    }
    else {
        stepX = 1;
    }

    x = x1;
    y = y1;

    //Painting the line since the starting point.
    var p;
    if (dx > dy) {
        p = 2 * dy - dx;
        const twoDy = 2 * dy, twoDyMinusDx = 2 * (dy - dx);
        while (x != x2) {
            x += stepX;
            if (p < 0) {
                p += twoDy;
            }
            else {
                y += stepY;
                p += twoDyMinusDx;
            }
            context.fillRect(x, y, 1, 1);
        }
    }
    else {
        p = 2 * dx - dy;
        const twoDx = 2 * dx, twoDxMinusDy = 2 * (dx - dy);
        while (y != y2) {
            y += stepY;
            if (p < 0) {
                p += twoDx;
            }
            else {
                x += stepX;
                p += twoDxMinusDy;
            }
            context.fillRect(x, y, 1, 1);
        }
    }
}
//Slection of the canvas.
const canvas = document.querySelector('canvas');

//The canvas going to occupy the entire screen.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//contextt of the canvas for 2D painting.
const context = canvas.getContext('2d');

//Initialization of the painting area.
context.beginPath();

for (var i = 0; i < 10; i++) {
    //Each line going to be paint every second.
    setTimeout(() => {
        //First point position on X and Y.
        var x1 = Math.floor(Math.random() * canvas.width), y1 = Math.floor(Math.random() * canvas.height);

        //Second point position on X and Y.
        var x2 = Math.floor(Math.random() * canvas.width), y2 = Math.floor(Math.random() * canvas.height);

        //Painting the line.
        context.fillStyle = 'rgb(' + random_number_between(0, 255) + ', ' + random_number_between(0, 255) + ', ' + random_number_between(0, 255) + ')';
        line_bresenham(x1, y1, x2, y2);
    }, i * 1000);
}

//Closing of the painting area.
context.closePath();