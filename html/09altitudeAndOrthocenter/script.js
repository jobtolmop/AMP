const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(750,100), 20, "red", true);
let B = new Point(new Vector2d(1100,600), 20, "red", true);
let C = new Point(new Vector2d(400,600), 20, "red", true);

let D = new Point(new Vector2d(475,350), 20, "orange", false);
let E = new Point(new Vector2d(225,450), 20, "orange", false);
let F = new Point(new Vector2d(750,500), 20, "orange", false);

let S = new Point(new Vector2d(200,500), 15, "white", true);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);

let o = new LinearFunction(1,1);
let p = new LinearFunction(1,1);
let q = new LinearFunction(1,1);


function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);

  l.defineLineByTwoPoints(A,B);
  m.defineLineByTwoPoints(B,C);
  n.defineLineByTwoPoints(A,C);

  l.draw(context);
  m.draw(context);
  n.draw(context);

  o.defineLineByTwoPoints(S,D);
  p.defineLineByTwoPoints(S,E);
  q.defineLineByTwoPoints(S,F);

  o.draw(context);
  p.draw(context);
  q.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  
  D.MiddleLine(A,B);
  D.draw(context);

  E.MiddleLine(B,C);
  E.draw(context);

  F.MiddleLine(A,C);
  F.draw(context);

  S.MiddleCrossPoint(A,B,C);
  S.draw(context);
}

animate();
