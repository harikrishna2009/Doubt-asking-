class Particle{
    constructor(x,y){
        var options={
            restitution: 2,
            friction: 0.3,
            isStatic:false
        }
        //var particles = [];
        //var plinkos = [];
        //var divisions = [];
        this.r = 10
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
}