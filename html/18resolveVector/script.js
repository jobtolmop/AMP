const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(400,300),20, 0,200,0, true);
let B = new Point(new Vector2d(800,500),20, 0,200,0, true);
let C = new Point(new Vector2d(250,350),10, 255,0,0, true);

let line_1 = new LinearFunction(1,1);
let line_2 = new LinearFunction(1,1);

let vector = new Vector2d(1,1);
let rad = new Vector2d(1,1);
let tan = new Vector2d(1,1);

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  vector.dx = B.position.dx - A.position.dx;
  vector.dy = B.position.dy - A.position.dy;

  rad.dx = C.position.dx - A.position.dx;
  rad.dy = C.position.dy - A.position.dy;

  tan.dx = -rad.dy;
  tan.dy = rad.dx

  line_1.defineLineByTwoPoints(A,B);
  line_2.defineLineByTwoPoints(A,C);

  line_1.draw(context);
  line_2.draw(context);

  vector.draw(context,A.position,1);

  rad.magnitude = 1;
  tan.magnitude = 1;

  rad.magnitude = vector.dot(rad);
  tan.magnitude = vector.dot(tan);

  rad.draw(context,A.position,1);
  tan.draw(context,A.position,1);

  A.draw(context);
  B.draw(context);

  C.draw(context);
}

animate()
