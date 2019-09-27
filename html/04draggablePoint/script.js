const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(200 ,200),20, "blue", true);



function animate()
{
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);
  point.draw(context);
}
animate()
