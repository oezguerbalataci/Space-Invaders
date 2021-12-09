class Alien {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.vel = 3;
    this.direction = 1; // 1 sag -1 sol;
    this.w = 64;
    this.h = 64;
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
    this.x += this.direction * this.vel;
  }

  move_indent() {
    this.y += 64;
  }

  move_with_vel(direction) {
    if (direction == 0) this.x += this.vel;
    else if (direction == 1) this.x -= this.vel;
  }

}

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
