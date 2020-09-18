class Stone{
    constructor(x, y,bodyA) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.width=width;
        this.height=height
        this.image = loadImage("stone.png");
      }
     
      display(){ 
        push();
        rectMode(CENTER);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image,50, 660,50,50);
        pop();
      }
}