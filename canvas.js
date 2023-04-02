//Slection of the canvas.
const canvas = document.querySelector('canvas');

//The canvas going to occupy the entire screen.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Context of the canvas for 2D painting.
const contex = canvas.getContext('2d');

//Initialization of the painting area.
contex.beginPath();

for(var i = 0; i < 100; i++) {
    //Each point going to be paint every second.
    setTimeout(() => {
        //Point position on X and Y.
        var positionX = Math.floor(Math.random() * canvas.width);
        var positionY = Math.floor(Math.random() * canvas.height);

        //Painting the point.
        contex.fillRect(positionX, positionY, 10, 10);
    }, i * 1000);
}

//Closing of the painting area.
contex.closePath();