//Selection of the canvas.
const canvas = document.querySelector('canvas');

//The canvas going to occupy the entire screen.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Context of the canvas for 2D painting.
const context = canvas.getContext('2d');

//Initialization of the painting area.
context.beginPath();

/**
 * Function will be excecuted each time the button is cliked.
 */
document.getElementById('submit').onclick = function() {
    //Clear the content of the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Get the value to be in the input.
    var lines = document.getElementById('lines').value;

    //Going to paint quantity of lines acordding to the input value.
    for (var i = 0; i < lines; i++) {
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
}

//Closing of the painting area.
context.closePath();