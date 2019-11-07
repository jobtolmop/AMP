const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let car = new Image();
car.src = "../../img/car.png";

let wheelFront = new Image();
wheelFront.src = "../../img/wheel.png";

let wheelBack = new Image();
wheelBack.src = "../../img/wheel.png";

wheelBack.pos = new Vector2d(0,0);
wheelBack.rotation = 0;
wheelFront.pos = new Vector2d(0,0);
wheelFront.rotation = 0;
car.pos = new Vector2d(0,400);
car.vel = new Vector2d(10,0);

car.addEventListener('load',()=>
{
  animate();
})

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  car.pos.add(car.vel);
  context.drawImage(car,car.pos.dx,car.pos.dy);
  wheelFront.pos.dx = car.pos.dx;
  wheelFront.pos.dy = car.pos.dy;
  wheelFront.pos.add(new Vector2d(674 + (wheelFront.width/2),120 + (wheelFront.width/2)));
  wheelFront.rotation += 0.1;
  context.save();
  context.translate(wheelFront.pos.dx, wheelFront.pos.dy);
  context.rotate(wheelFront.rotation);
  context.drawImage(wheelFront,-wheelFront.width/2,-wheelFront.width/2);
  context.restore();
  wheelBack.pos.dx = car.pos.dx;
  wheelBack.pos.dy = car.pos.dy;
  wheelBack.pos.add(new Vector2d(134 + (wheelBack.width/2),120 + (wheelBack.width/2)));
  wheelBack.rotation += 0.1;
  context.save();
  context.translate(wheelBack.pos.dx, wheelBack.pos.dy);
  context.rotate(wheelBack.rotation);
  context.drawImage(wheelBack,-wheelBack.width/2,-wheelBack.width/2);
  context.restore();
  clamp();
}

function clamp()
{
  if (car.pos.dx > canvas.width)
  {
    car.pos.dx = -car.width;
  }
}
