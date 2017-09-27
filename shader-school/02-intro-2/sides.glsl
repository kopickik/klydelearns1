void sideLengths(
  highp float hypotenuse, 
  highp float angleInDegrees, 
  out highp float opposite, 
  out highp float adjacent) {

    opposite = sin(radians(angleInDegrees)) * hypotenuse;
    adjacent = cos(radians(angleInDegrees)) * hypotenuse;
}

//Do not change this line
#pragma glslify: export(sideLengths)