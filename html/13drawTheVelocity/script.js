const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

for (var i = 0; i < 15; i++) {
  points[i] = new DPoint(new Vector2d(GetRandom(400,50),GetRandom(400,50)), new Vector2d(GetRandom(8,2),GetRandom(4,3)), new Vector2d(0,0),20, "purple");
}

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  for (var i = 0; i < points.length; i++) {
    points[i].update();
    points[i].draw(context);
    points[i].vel.draw(context,points[i].pos, points[i].vel.angle);
  }

}

function GetRandom(max, min)
{
  return Math.random()* max + min;
}

animate()
