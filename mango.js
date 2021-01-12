class mango {

    constructor(x,y,r){
    
    var options={
    
        isStatic:true,
        restitution:0,
        friction:1,
        
    
    }
    this.x=x;
    this.y=y;
    this.r=70;
    this.body=Bodies.circle(this.x,this.y, this.r/2, options)
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);
    }
    display(){
        var mangopos=this.body.position;
        push()
        translate(mangopos.x, mangopos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 75, 75);
        
        pop()
    }
    
    
    
    }