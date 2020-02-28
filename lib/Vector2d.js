class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude()
    {
      return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    get angle()
    {
      return Math.atan2(this.dy, this.dx);
    }

    set magnitude(newMagnitude)
    {
      let tempAngle = this.angle;
      this.dx = newMagnitude*Math.cos(tempAngle);
      this.dy = newMagnitude*Math.sin(tempAngle);
    }

    differenceVector(a,b)
    {
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    scalarMul(num)
    {
      this.dx *= num;
      this.dy *= num;
    }

    dot(vector)
    {
      return this.dx * vector.dx + this.dy * vector.dy;
    }

    add(vector)
    {
      this.dx += vector.dx;
      this.dy += vector.dy;
    }

    draw(context, pos, scale)
    {
      let shaftHeight = 10;
      let shaftLength = this.magnitude * scale;
      let headHeight = 30;
      let headLength = 15;


      context.save();
      context.translate(pos.dx,pos.dy);
      context.rotate(this.angle);
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
