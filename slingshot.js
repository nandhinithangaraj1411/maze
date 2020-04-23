class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);

    }

    display(){
        if(this.slingshot.bodyA){
        var pointB = this.pointB;
        var pointA = this.slingshot.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.slingshot.bodyA=null;
    }
}