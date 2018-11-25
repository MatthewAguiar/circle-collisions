
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
