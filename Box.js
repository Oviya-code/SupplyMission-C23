class Box{
    constructor(x,y,width,height){
        this.staticBody=Bodies.rectangle(x,y,width,height);
        World.add(world,this.staticBody);
}
        display() {
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
           translate(box.x,pos.y);
           rotate(angle);
           rectMode(CENTER);
           fill ("red");
           rect(0,0,this.width,this.height)
           pop();
        }
    }
