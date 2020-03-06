const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(750,100), 20, 0,200,0, true);
let B = new Point(new Vector2d(1100,600), 20, 0,200,0, true);

let C = new Point(new Vector2d(1300,200), 20, 0,200,200, true);


let l = new LinearFunction(1,1);

function animate()
{

  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  l.defineLineByTwoPoints(A,B);

  l.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);

}

animate();
