class Slingshot{
    constructor(A, slingx, slingy){
        var options = {
            bodyA: A,
            pointB: {x: slingx, y:slingy},
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly()
{
    this.chain.bodyA = null;
}

    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
       
        strokeWeight(4);
        line(pointA.x, pointA.y, this.chain.pointB.x, this.chain.pointB.y);
    }
}

}