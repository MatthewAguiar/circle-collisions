/*
Circle to Circle Collision - Test Platform: MAIN JAVASCRIPT
Copyright (C) 2018 Matthew Aguiar

  Objective:
  The objective of this test platform is to test the concept of collision detection between two circles. It accomplishes this goal
  using the Pythagorean Theorum to calculate the distance between two objects. Once the circles begin to overlap (the distance between them is less than their radii),
  a collision has occured!
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Global Constants / Variables /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
GLOBALS:
1) mouse_marker - This is going to be the Circle object that will allow an HTML canvas arc follow the users mouse.
2) center_circle - This will be the Circle object that will allow an HTML canvas arc to lie in the center of the window.
3) CANVAS - A constant that QUESTION the main-canvas in index.html.
4) CANVAS_CONTEXT - A constant that QUESTION.
*/
let mouse_marker;
let center_circle;
const CANVAS = document.getElementById("main-canvas");
const CANVAS_CONTEXT = CANVAS.getContext("2d");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Functions ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init()
{
  //Define width and height of the HTML CANVAS and then invoke two Circle objects and assign them to the two global variables above.
  CANVAS.width = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).width);
  CANVAS.height = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).height);
  mouse_marker = new Circle(0, 0, 30, "lightgreen");
  center_circle = new Circle(CANVAS.width / 2, CANVAS.height / 2, 50, "black");

  //Assign an eventListener to the QUESTION in order to update the position of the circle on the mouse.
  document.addEventListener("mousemove", function(event)
  {
    //Gets new x and y coordinates based on the mouse's position on the webpage AND the canvas' position in page.
    let newX = event.clientX - CANVAS.getBoundingClientRect().left;
    let newY = event.clientY - CANVAS.getBoundingClientRect().top;

    if(newX >= 0 && newX <= CANVAS.width) //As long as the mouse's circle is within the horizontal bounds of the canvas, allow its x position to be updated.
    {
      mouse_marker.x = newX;
    }

    if(newY >= 0 && newY <= CANVAS.height) //As long as the mouse's circle is within the vertical bounds of the canvas, allow its y position to be updated.
    {
      mouse_marker.y = newY;
    }
  });
}

function refresh_canvas()
  {
    requestAnimationFrame(refresh_canvas); //Get the next frame of animation using the previous state. QUESTION
    CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height); //Be sure to clear the canvas so that artifacts do not clutter the screen.
    center_circle.update();
    mouse_marker.update();

    if(mouse_marker.intersect(center_circle)) //TODO HERE!!!
    {
      center_circle.color = "red";
    }
    else
    {
      center_circle.color = "black";
    }
    //console.log(get_distance(mouse_marker.x, mouse_marker.y, center_circle.x, center_circle.y));
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Main Code ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
init(); //Initialize the canvas' width and height as well as the two global circle objects. Additionally, create an event that listens to mouse movements so the mouse_circle may update its position.
refresh_canvas(); //Once the init() function has completed, begin the "main loop". This function will continue to draw its contents and clear itself each animation frame.
/*
Why let vs var?
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// References ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Lis, Christopher. (June 6, 2017). "How to Code: Collision Detection — Part I".
  [HTML, CSS, Javascript]. Retrieved from: https://www.youtube.com/watch?v=XYzA_kPWyJ8
*/
