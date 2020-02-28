const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(750,100), 20, 0,200,0, true);
let B = new Point(new Vector2d(1100,600), 20, 0,200,0, true);
let C = new Point(new Vector2d(400,600), 10, 200,0,0, true);

let l = new LinearFunction(1,1);
let l2 = new LinearFunction(1,1);

let vector = new Vector2d(1,1);
let rad = new Vector2d(1,1);
let tan = new Vector2d(1,1);

function animate()
{

  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  vector.dx = B.position.dx - A.position.dx;
  vector.dy = B.position.dy - A.position.dy;

  rad.dx = C.position.dx - A.position.dx;
  rad.dy = C.position.dy - A.position.dy;

  tan.dx = rad.dy;
  tan.dy = rad.dx;

  l.defineLineByTwoPoints(A,B);
  l2.defineLineByTwoPoints(A,C);

  vector.draw(context,A.position,1);

  rad.magnitude = 1;
  tan.magnitude = 1;

  rad.magnitude = vector.dot(rad);
  tan.magnitude = vector.dot(tan);

  rad.draw(context,A.position,1);
  tan.draw(context,A.position,1);

  l.draw(context);
  l2.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

}

animate();
