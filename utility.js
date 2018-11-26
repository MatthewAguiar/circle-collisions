
function get_distance(x1, y1, x2, y2)
{
  let a = x2 - x1;
  let b = y2- y1;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
