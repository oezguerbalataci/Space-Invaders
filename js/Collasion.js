function alienCollide() {
  //---- SENDs
  for (i of bullets) {
    for (t of aliens) {
      if (bulletAlienCollasion(i, t) == 0) {
        score += 5;
        alindex = aliens.indexOf(t);
        aliens.splice(alindex, 1);
        bullets.splice(0, 1);
      }
    }
  }

  for (i of bullets) {
    for (t of aliens2) {
      if (bulletAlienCollasion(i, t) == 0) {
        score += 5;
        alindex = aliens2.indexOf(t);
        aliens2.splice(alindex, 1);
        bullets.splice(0, 1);
      }
    }
  }

  for (i of bullets) {
    for (t of aliens3) {
      if (bulletAlienCollasion(i, t) == 0) {
        score += 5;
        alindex = aliens3.indexOf(t);
        aliens3.splice(alindex, 1);
        bullets.splice(0, 1);
      }
    }
  }
}
// ---- Checks if the bullet and the alien object Collides
function bulletAlienCollasion(rect1, rect2) {
  if (
    rect1.x < rect2.x + rect2.w-16 &&
    rect1.x + rect1.w > rect2.x+16 &&
    rect1.y < rect2.y + rect2.h-16 &&
    rect1.h + rect1.y > rect2.y+16  
  ) {
    // collision detected!
    return 0;
  } else {
    // no collision
    return 1;
  }
}

function checkCollasionAlienandPlayer() {
  for (i of aliens) {
    if (bulletAlienCollasion(spaceship, i) == 0 || i.y>=spaceship.y) {
      alindex = aliens.indexOf(i);
      aliens.splice(alindex, 1);
      spaceship.hp -= 1;
    }
  }
  for (i of aliens2) {
    if (bulletAlienCollasion(spaceship, i) == 0 || i.y >=spaceship.y) {
      alindex = aliens2.indexOf(i);
      aliens2.splice(alindex, 1);
      spaceship.hp -= 1;
    }
  }
  for (i of aliens3) {
    if (bulletAlienCollasion(spaceship, i) == 0|| i.y>= spaceship.y) {
      alindex = aliens3.indexOf(i);
      aliens3.splice(alindex, 1);
      spaceship.hp -= 1;
    }
  }
}

function checkColDetBulletandPlayer(){
  for(i of alienBullets){
    if(bulletAlienCollasion(spaceship,i)== 0){
      bulindex = alienBullets.indexOf(i);
      alienBullets.splice(bulindex,1);
      spaceship.hp -=1;
    }
  }
}