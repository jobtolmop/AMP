const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let  A = new Point(new Vector2d(100,120), 20, 255,0,0,true);
let  B = new Point(new Vector2d(500,100), 20, 0,0,255,true);
let  C = new Point(new Vector2d(300,500), 20, 0,255,0,true);
let  S = new Point(new Vector2d(0,0), 10, 200,195,0,true);

let l = new LinearFunction(1,1);
let k = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let l2 = new LinearFunction(1,1);
let k2 = new LinearFunction(1,1);
let m2 = new LinearFunction(1,1);

function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  l.defineLineByTwoPoints(A,B);
  m.defineLineByTwoPoints(C,B);
  k.defineLineByTwoPoints(C,A);

  l2.slope = -(1/m.slope);
  l2.intercept = A.position.dy - l2.slope * A.position.dx;
  m2.slope = -(1/k.slope);
  m2.intercept = B.position.dy - m2.slope * B.position.dx;
  k2.slope = -(1/l.slope);
  k2.intercept = C.position.dy - k2.slope * C.position.dx;

  l.draw(context);
  l2.draw(context);
  m.draw(context);
  m2.draw(context);
  k.draw(context);
  k2.draw(context);

  C.draw(context);
  A.draw(context);
  B.draw(context);

  S.position.dx = (m2.intercept-l2.intercept)/(l2.slope-m2.slope);
  S.position.dy = (l2.slope*S.position.dx)+l2.intercept;
  S.draw(context);
}

animate();
