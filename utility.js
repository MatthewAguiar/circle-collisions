/*
Circle to Circle Collision - Test Platform: UTILITIES
Copyright (C) 2018 Matthew Aguiar

  Objective:
  The objective of this test platform is to test the concept of collision detection between two circles. It accomplishes this goal
  using the Pythagorean Theorum to calculate the distance between two objects. Once the circles begin to overlap (the distance between them is less than their radii),
  a collision has occured!
*/

function get_distance(x1, y1, x2, y2)
{
  let a = x2 - x1;
  let b = y2- y1;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
