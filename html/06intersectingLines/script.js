const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200), 20, "yellow", true);
let B = new Point(new Vector2d(900,500), 20, "red", true);

let S = new Point(new Vector2d(200,300), 20, "white", false);

let C = new Point(new Vector2d(400,400), 20, "blue", true);
let D = new Point(new Vector2d(900,200), 20, "green", true);



let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  l.defineLineByTwoPoints(A,B);
  l.draw(context);
  m.draw(context);
  A.draw(context);
  B.draw(context);
  m.defineLineByTwoPoints(C,D);
  C.draw(context);
  D.draw(context);
  S.position.dx = (m.intercept-l.intercept)/(l.slope-m.slope);
  S.position.dy = (m.calcY(S.position.dx));

  S.draw(context);
}

animate();
