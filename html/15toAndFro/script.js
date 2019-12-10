const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let toB = true;

let A = new Point(new Vector2d(200,300),20,255,0,0,true)
let B = new Point(new Vector2d(500,400),20,255,0,0,true)
let C = new Point(new Vector2d(700,500),20,255,0,0,true)

let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"white");

let currTarget = 0;

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  context.beginPath();
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.lineTo(C.position.dx,C.position.dy);
  context.closePath();
  context.stroke();

  A.draw(context);
  B.draw(context);
  C.draw(context);

  point.draw(context);

  switch (currTarget) {
    case 0:
    point.vel.differenceVector(B.position,point.pos);
    if (point.vel.magnitude < 0.1)
    {
      currTarget = 1;
    }
      break;
      case 1:
      point.vel.differenceVector(A.position,point.pos);
      if (point.vel.magnitude < 0.1)
      {
        currTarget = 2;
      }
        break;
        case 2:
        point.vel.differenceVector(C.position,point.pos);
        if (point.vel.magnitude < 0.1)
        {
          currTarget = 0;
        }
    default:

  }

  console.log(point.vel.magnitude)
  point.vel.scalarMul(0.1);
  point.update();
}

animate()
