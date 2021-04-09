class Hammer{

    constructor(x,y,width,height){
        var options = {
            //'isStatic':false,
            'restitution':0.5,
            'friction':1.0,
            'density':4,
    
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Matter.Body.setAngle(this.body, angle);
    
        World.add(world, this.body);
    }
    display(){

        var pos=this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('orange');
        fill('magenta'); // I will log..
        rect(0,0,this.width, this.height);
        pop();
    };
}
    

