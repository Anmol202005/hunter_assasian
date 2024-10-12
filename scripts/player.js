export class Player{
 constructor({position,velocity,image}){
this.position=position;
this.velocity=velocity;
this.image=image;
this.f=0;
this.c=0;
this.pangle=0;
this.angle=0;

}
update(){
    this.position.x+=this.velocity.x;
    this.position.y+=this.velocity.y;
}
build(){
    const canvas =document.querySelector(".map");
    const c=canvas.getContext("2d");
    c.save();
    c.translate(this.position.x+40/2,this.position.y+50/2);
    c.rotate(this.angle);
    c.drawImage(this.image,0+45*((this.f)%6),0,40,50,-20,-25,40,50);
    c.restore();
    this.c++;
    if(this.c%20==0){
    this.f++;}

}}