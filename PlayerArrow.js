class PlayerArrow{
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: .03,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("arrow.png");
      
      World.add(world, this.body);

      this.trajectory = []

    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(50);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if (this.body.velocity.x > 0 && this.body.position.x > 400) {
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
    
        for (var i = 0; i < this.trajectory.length; i++) {
          fill("white");
          ellipse(this.trajectory[i][0], this.trajectory[i][1], 5, 5);
        }
    
    }
}
