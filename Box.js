class Box{
    constructor(x,y,weight,height)
    {
        var options={
            restitution:1.0
        }
        this.body=Bodies.rectangle(x,y,weight,height,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
}