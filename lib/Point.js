class Point {

    constructor(position,size,r,g,b, draggable)
    {
        this.position = position;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
        this.draggable = draggable;
        if(this.draggable){
          this.drag();
        }
    }

    draw(context)
    {
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 7;
        context.fillStyle = "rgb("+this.r+","+this.g+","+this.b+")";
        context.arc(this.position.dx,this.position.dy,this.size,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }

    calcMiddle(A,B)
    {
      this.position.dx = (A.position.dx + B.position.dx)/2;
      this.position.dy = (A.position.dy + B.position.dy)/2;
    }

    calcCircleDistance(B,context)
    {
      let a = B.position.dx - this.position.dx;
      let b = B.position.dy - this.position.dy;
      let c = Math.sqrt( a * a + b * b);
      context.beginPath();
      context.strokeStyle = "black";
      context.lineWidth = 3;
      context.arc(this.position.dx,this.position.dy,c,0,2*Math.PI);
      context.stroke();
      context.closePath();
    }



    drag(){
      let dragging = false;

      window.addEventListener('mousedown',(evt)=>
      {
        let mouse = new Vector2d(evt.clientX,evt.clientY);
        let d = new Vector2d(0,0);
        d.differenceVector(mouse,this.position);

        if(d.magnitude<this.size)
        {
          console.log("Dragged");
          dragging = true;
        }
        else
        {
          dragging= false;
        }
      });

      window.addEventListener('mouseup',(evt)=>{
        dragging = false;
      });

      window.addEventListener('mousemove',(evt)=>{
        if(dragging){
          this.position.dx = evt.clientX;
          this.position.dy = evt.clientY;
        }

        let mouse = new Vector2d(evt.clientX,evt.clientY);
        let d = new Vector2d(0,0);
        d.differenceVector(mouse,this.position);

        if(d.magnitude<this.size)
        {
          document.body.style.cursor = "pointer";
          evt.stopImmediatePropagation();
        }
        else
        {
          document.body.style.cursor = "auto";
        }
      })
    }
}
