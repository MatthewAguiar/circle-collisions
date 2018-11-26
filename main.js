
function animate()
{
  requestAnimationFrame(animate);
  CANVAS_CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
  center_circle.update();
  mouse_marker.update();

  if(mouse_marker.intersect(center_circle))
  {
    center_circle.color = "red";
  }
  else
  {
    center_circle.color = "black";
  }
  //console.log(get_distance(mouse_marker.x, mouse_marker.y, center_circle.x, center_circle.y));
}

function init()
{
  CANVAS.width = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).width);
  CANVAS.height = parseInt(window.getComputedStyle(document.querySelector("#main-canvas")).height);
  mouse_marker = new Circle(0, 0, 30, "lightgreen");
  center_circle = new Circle(CANVAS.width / 2, CANVAS.height / 2, 50, "black");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// Main Code ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let mouse_marker;
let center_circle
const CANVAS = document.getElementById("main-canvas");
const CANVAS_CONTEXT = CANVAS.getContext("2d");

document.addEventListener("mousemove", function(event)
{
  let newX = event.clientX - CANVAS.getBoundingClientRect().left;
  let newY = event.clientY - CANVAS.getBoundingClientRect().top;

  if(newX >= 0 && newX <= CANVAS.width)
  {
    mouse_marker.x = newX;
  }

  if(newY >= 0 && newY <= CANVAS.height)
  {
    mouse_marker.y = newY;
  }
});
init();
animate();
