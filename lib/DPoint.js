class DPoint
{
  constructor(pos,vel,acc,radius,color)
  {
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
  }

update()
{
  this.pos.add(this.vel);

  if (this.pos.dx > canvas.width - this.radius)
  {
    this.vel.dx = - Math.abs(this.vel.dx);
  }

  if (this.pos.dy > canvas.height - this.radius)
  {
    this.vel.dy = - Math.abs(this.vel.dy);
  }

  if (this.pos.dy < this.radius)
  {
    this.vel.dy = Math.abs(this.vel.dy);
  }

  if (this.pos.dx < this.radius)
  {
    this.vel.dx = Math.abs(this.vel.dx);
  }

}

draw(context)
{
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 7;
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
}
}
