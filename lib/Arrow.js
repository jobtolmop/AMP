class Arrow
{
  constructor(pos)
  {
    this.pos = pos;
  }

  draw(context)
  {
    let shaftHeight = 10;
    let shaftLength = 70;
    let headHeight = 30;
    let headLength = 15;


    context.save();
    context.translate(this.pos.dx,this.pos.dy);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0, -shaftHeight/2);
    context.lineTo(shaftLength, -shaftHeight/2);
    context.lineTo(shaftLength, -headHeight/2);
    context.lineTo(shaftLength + headLength, 0);
    context.lineTo(shaftLength, headHeight/2);
    context.lineTo(shaftLength, shaftHeight/2);
    context.lineTo(0, shaftHeight/2);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  }
}
