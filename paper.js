class paper extends BaseClass{
    constructor(x,y){
        super(x,y,30,30);
    
     this.image=loadImage("images/paper.png")
    
    }
    display(){
        var pos=this.body.position;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}
