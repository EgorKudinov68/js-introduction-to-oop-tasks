// BEGIN
function Point(x, y) {
  this.x = x;
  this.y = y;
  
  this.getX = function() {
    return this.x;
  };
  
  this.getY = function() {
    return this.y;
  };
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  
  this.getBeginPoint = function() {
    return this.beginPoint;
  };
  
  this.getEndPoint = function() {
    return this.endPoint;
  };
}

function reverse(segment) {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  
  const newBeginPoint = new Point(endPoint.getX(), endPoint.getY());
  const newEndPoint = new Point(beginPoint.getX(), beginPoint.getY());
  
  return new Segment(newBeginPoint, newEndPoint);
}

export { Point, Segment, reverse };
// END
