class Projectile {
  constructor(x, img) {
    this.x = x+16;
    this.y = 704 - 32 ;
    this.velocity = 16;
    this.img = img;
    this.w = 32;
    this.h = 32;
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
    this.y -= this.velocity;
  }
}

class AlienProjectile{
  constructor(x,y,img){
    this.x =x+16;
    this.y = y+56;
    this.velocity = 14;
    this.img = img;
    this.w =32;
    this.h =32;
  }
  show(){
    image(this.img, this.x, this.y, this.w, this.h);
    this.y += this.velocity;
  }
}