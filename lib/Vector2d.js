class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    dot(vector)
    {
      return (this.dx * vector.dx + this.dy *vector.dy);
    }

    differenceVector(a,b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    sumVector(a,b){
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }

    add(vector){
      this.dx += vector.dx;
      this.dy += vector.dy;
    }

    scalMul(scal){
      this.dx *= scal;
      this.dy *= scal;
    }

    get magnitude(){
      return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    get angle(){
      return Math.atan2(this.dy,this.dx);
    }

    set magnitude(newMagnitude){
      let angle = this.angle;
      //polar coordinates
      this.dx = newMagnitude*Math.cos(angle);
      this.dy = newMagnitude*Math.sin(angle);

    }

    draw(context,pos,scale,color){
      let shaftHeight = 10;
      let arrowHeight = 20;
      let arrowWidth = 40;
      let shaftWidth = this.magnitude*scale - arrowWidth;

      context.fillStyle = color || "white";

      context.save();
      context.translate(pos.dx,pos.dy);
      context.rotate(this.angle)

      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(0,shaftHeight/2);
      context.lineTo(shaftWidth,shaftHeight/2);
      context.lineTo(shaftWidth,arrowHeight/2);
      context.lineTo(shaftWidth + arrowWidth,0);
      context.lineTo(shaftWidth,-arrowHeight/2);
      context.lineTo(shaftWidth,-shaftHeight/2);
      context.lineTo(0,-shaftHeight/2);
      context.closePath();
      context.stroke();
      context.fill();

      context.restore();
    }
}
