const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let f = new LinearFunction(-1,1000);

for(let x = 0; x<width; x+=10)
{
//console.log(f.calcY(x));
let point = new Point(new Vector2d(x,f.calcY(x)), 10);
point.draw(context);
}
