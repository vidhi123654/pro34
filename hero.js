class Hero{
    constructor(x,y){
  var options={
      friction:1.0,
      density:1.0,
      restitution:0.5,
      isStatic:true
  }
  this.body = Bodies.rectangle(x, y,250,110, options);
  this.width = 250;
  this.height =110;
  this.image = loadImage("hero.png");
  World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
}
}