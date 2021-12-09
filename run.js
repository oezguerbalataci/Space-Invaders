// Function to get key strokes to move ship and shoot projectiles

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    spaceship.left();
  } else if (keyCode === LEFT_ARROW) {
    spaceship.right();
  }
  if (keyCode == 32) {
    bullet = new Projectile(spaceship.x, bulletImg);
    if (bullets.length ==0) {
      bullets.push(bullet);
    }
  }
}


function run() {
  for (element of bullets) {
    if (element.y <= -64 && bullets.length != 0) {
      index = bullets.indexOf(element);
      bullets.splice(index, 1);
    }
    element.show();
  }

  for (element of aliens) {
    element.show();
  }

  for (element of aliens2) {
    element.show();
  }
  for (element of aliens3) {
    element.show();
  }
  // when
  scoreBoard();
  if (spaceship.hp <= 0) {
    endMenu();
  }

}

function endMenu() {
  background(144,224,239);
  textSize(86);
  textAlign(CENTER);
  text("GAME OVER!!!", 1024 / 2, 768 / 2);
  textSize(50);
  text("End Score:", 1024/2 -60,768/2+60)
  text(score, 1024 / 2+120, 768 / 2+60);
}

function scoreBoard() {
  textSize(24);
  text("Score: ",800,763);
  text(score, 870, 763);
  fill(2, 62, 138);
}

function restart(){
  window.location.reload();
}
