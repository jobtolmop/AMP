const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let  A = new Point(new Vector2d(100,110), 15, 255,0,0,true);
let  B = new Point(new Vector2d(500,100), 15, 255,0,0,true);
let  C = new Point(new Vector2d(300,500), 15, 255,0,0,true);
let  D = new Point(new Vector2d(0,0), 5, 100,100,100,false);
let  E = new Point(new Vector2d(0,0), 5, 100,100,100,false);
let  F = new Point(new Vector2d(0,0), 5, 100,100,100,false);
let  S = new Point(new Vector2d(0,0), 5, 200,200,200,false);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);
let p = new LinearFunction(1,1);
let q = new LinearFunction(1,1);

function animate()
{
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  l.defineLineByTwoPoints(A,B);
  m.defineLineByTwoPoints(C,B);
  n.defineLineByTwoPoints(C,A);

  o.calcPerp(D,l);
  p.calcPerp(F,m);
  q.calcPerp(E,n);

  l.draw(context);
  m.draw(context);
  n.draw(context);
  o.draw(context);
  p.draw(context);
  q.draw(context);

  D.calcMiddle(A,B);
  E.calcMiddle(A,C);
  F.calcMiddle(B,C);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  E.draw(context);
  F.draw(context);

  S.calcCircleDistance(B,context);
  S.position.dx = (p.intercept-o.intercept)/(o.slope-p.slope);
  S.position.dy = (o.slope*S.position.dx)+o.intercept;
  S.draw(context);
}

animate();
