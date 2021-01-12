class tree {

    constructor(x,y,r){
    
    var options={
    
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    
    }
    this.x=x;
    this.y=y;
    this.r=70;
    this.body=Bodies.circle(this.x,this.y, this.r/2, options)
    this.image = loadImage("sprites/tree.png");
    World.add(world, this.body);
    }
    display(){
        var treepos=this.body.position;
        push()
        translate(treepos.x, treepos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, 500, 500);
        
        pop()
    }
    
    
    
    }