// Alien Class
class Alien {
  constructor(x, y, img) {
    //cordinates
    this.x = x;  
    this.y = y;
    //use the loaded img
    this.img = img;
    this.vel = 3;
    this.direction = 1; // 1 sag -1 sol;
    //with and height
    this.w = 64;
    this.h = 64;
  }

  //draw the alien
  show() {
    image(this.img, this.x, this.y, this.w, this.h);
    this.x += this.direction * this.vel;
  }

  // move the alien in y direction
  move_indent() {
    this.y += 64;
  }

  // move the alien in x direction
  move_with_vel(direction) {
    if (direction == 0) this.x += this.vel;
    else if (direction == 1) this.x -= this.vel;
  }

}

// if Aliens hit corners move them in y direction and change the direction
function alienMove() {
  if (aliens.length != 0) {
    if (aliens[aliens.length - 1].x >= 960) {
      if (aliens.length != 0) {
        for (element of aliens) {
          element.direction = -1;
          element.move_indent();
        }
      }

      if (aliens2.length != 0) {
        for (element of aliens2) {
          element.direction = -1;
          element.move_indent();
        }
      }
      if (aliens3.length != 0) {
        for (element of aliens3) {
          element.direction = -1;
          element.move_indent();
        }
      }
    }
  }

  if(aliens.length!=0){
    if (aliens[0].x <= 0) {
      if (aliens.length != 0) {
        for (element of aliens) {
          element.direction = 1;
          element.move_indent();
        }
      }
      if (aliens2.length != 0) {
        for (element of aliens2) {
          element.direction = 1;
          element.move_indent();
        }
      }
      if (aliens3.length != 0) {
        for (element of aliens3) {
          element.direction = 1;
          element.move_indent();
        }
      }
    }
  }
}

// Function to create aliens when there is none
function createAliens() {
  if (aliens.length == 0) {
    for (i = 0; i <= 7; i++) {
      if (aliens.length == 0) {
        alien = new Alien(0, 0, alienImg);
        aliens.push(alien);
      } else {
        alien = new Alien(i * 64, 0, alienImg);
        aliens.push(alien);
      }
    }

    for (i = 0; i <= 7; i++) {
      if (aliens2.length == 0) {
        alien = new Alien(0, 64, alienImg);
        aliens2.push(alien);
      } else {
        alien = new Alien(i * 64, 64, alienImg);
        aliens2.push(alien);
      }
    }
    for (i = 0; i <= 7; i++) {
      if (aliens3.length == 0) {
        alien = new Alien(0, 128, alienImg);
        aliens3.push(alien);
      } else {
        alien = new Alien(i * 64, 128, alienImg);
        aliens3.push(alien);
      }
    }
  }
}
