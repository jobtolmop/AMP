const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let mouse = {};

let arrow = new Arrow(new Vector2d(width/2,height/2));

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  let mx = mouse.x - arrow.pos.dx;
  let my = mouse.y - arrow.pos.dy;
  arrow.angle = Math.atan2(my, mx);
  arrow.draw(context);
}

animate();

addEventListener('mousemove',(evt)=>
{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})
