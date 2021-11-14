class Block{
    constructor(x,y){
       var options={
         isStatic:false,
         friction:0.8,
         restitution:1.1,
         density:1.0
       }
       this.body=Bodies.rectangle(x,y,40,40,options)
       this.width = 40;
       this.height = 40;
       World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("red");
      strokeWeight(3);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
}