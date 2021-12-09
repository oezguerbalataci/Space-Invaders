class Player {
  constructor(x, y, img,healthImg) {
    //takes x,y cordinates and the image object
    this.x = x;
    this.y = y;
    this.img = img;
    this.w = 64;
    this.h = 64;
    this.hp = 3; // Player will have 3 healt
    this.hpImg= healthImg;
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h); // draw image on screen
  }
  //------ MOVE THE SHIP
  show_health(){
    text("Health",700 ,0); 
    for(i = 0; i<this.hp; i++){
      image(this.hpImg,896+i*32,0)
    }
  }
  left() {
    if (this.x >= 960) {
      this.x += 0;
    } else {
      this.x += 32;
    }
  }
  right() {
    if (this.x <= 0) {
      this.x -= 0;
    } else {
      this.x -= 32;
    }
  }
  //-------
}
