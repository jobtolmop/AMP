class Point
{
  constructor(position,radius,color,draggable)
  {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.draggable = draggable||false;

    if (this.draggable)
    {
      this.drag()
    }
  }



    draw(context)
    {
      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }


    drag()
    {
      let dragging = false;
      addEventListener("mousedown", (evt)=>
      {
        let mouse = new Vector2d(evt.clientX, evt.clientY);
        let dif = new Vector2d(0,0);

        dif.differenceVector(this.position, mouse)

        console.log(dif.magnitude)
        console.log(dif)
        console.log(mouse)

        if (dif.magnitude < this.radius)
        {
          console.log("raak")
          dragging = true;
        }
      })
      addEventListener("mousemove", (evt)=>
      {
        if (dragging)
        {
          this.position.dx = evt.clientX;
          this.position.dy = evt.clientY;
        }

      })

      addEventListener("mouseup", ()=>
      {
        dragging = false;
      })
    }
  }
