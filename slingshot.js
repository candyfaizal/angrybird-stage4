class Slingshot
{
  constructor(a,b)
  {
      var option={bodyA:a,pointB:b,stiffness:0.4,length:5}
      this.Sling=Matter.Constraint.create(option)
  }
  display()
  {
    stroke("black")
    strokeWeight(4)
    line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.pointB.x,this.Sling.pointB.y)
  }
}