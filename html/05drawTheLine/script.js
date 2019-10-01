const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15,"green",true);
let B = new Point(new Vector2d(500,300),15,"green",true);


let l = new LinearFunction(1/3, 133.33);
l.defineLineByTwoPoints(A,B);


function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  for (let x = 0; x < width; x+=10)
  {
    let P = new Point(new Vector2d(x,l.calcY(x)),1);
    P.draw(context);
    A.draw(context);
    B.draw(context);
  }
}




animate();
