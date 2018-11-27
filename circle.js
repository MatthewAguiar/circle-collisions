/*
Circle to Circle Collision - Test Platform: CIRCLE CLASS
Copyright (C) 2018 Matthew Aguiar

  Objective:
  The objective of this test platform is to test the concept of collision detection between two circles. It accomplishes this goal
  using the Pythagorean Theorum to calculate the distance between two objects. Once the circles begin to overlap (the distance between them is less than their radii),
  a collision has occured!
*/

class Circle
{
  constructor(x, y, radius, color)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  update()
  {
    this.draw();
  }

  draw()
  {
    CANVAS_CONTEXT.beginPath();
    CANVAS_CONTEXT.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    CANVAS_CONTEXT.fillStyle = this.color;
    CANVAS_CONTEXT.fill();
    CANVAS_CONTEXT.closePath();
  }

  intersect(other)
  {
    if(get_distance(this.x, this.y, other.x, other.y) <= this.radius + other.radius)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// References ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Lis, Christopher. (June 6, 2017). "How to Code: Collision Detection — Part I".
  [HTML, CSS, Javascript]. Retrieved from: https://www.youtube.com/watch?v=XYzA_kPWyJ8
*/
