class Monster{
    constructor(x,y){
  var options={
      friction:1.0,
      density:1.0,
      restitution:0.7,
      isStatic:false
  }
  this.body = Bodies.rectangle(x, y,200,200, options);
  this.width = 200;
  this.height =200;
  this.image = loadImage("Monster-01.png");
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