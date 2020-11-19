class Box{
    constructor(x,y,w,h){
        var boxopt={
            restitution:1.0,
            isStatic:true
            
        }
        this.body=Bodies.rectangle(x,y,w,h,boxopt);
        this.width=w,
        this.height=h,

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER)

        rect(pos.x,pos.y,this.width,this.height)
    }
}