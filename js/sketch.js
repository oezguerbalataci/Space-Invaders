let aliens = [];
let aliens2 = [];
let aliens3 = [];
let bullets = [];
let score = 0;
let fr = 30  ;
let alienBullets =[];


function setup() {
  // setup frame rate
  frameRate(fr);

  // load images
  bg = loadImage("images/background.png");
  my_canvas = createCanvas(1024, 768);
  my_canvas.parent('my_canvas');
  spaceImg = loadImage("images/space.png");
  bulletImg = loadImage("images/bullet.png");
  alienImg = loadImage("images/alien.png");
  healtImg = loadImage('images/heart.png')
  spaceship = new Player(1024 / 2 - 64, 768 - 64, spaceImg,healtImg);
  alienBulletImg = loadImage("images/laser.png")

  // Create the first aliens
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
      alien = new Alien(0,128, alienImg);
      aliens3.push(alien);
    } else {
      alien = new Alien(i * 64, 128, alienImg);
      aliens3.push(alien);
    }
  }
}

// Built in function in p5.js to Draw on canvas
function draw() {
  background(179,229,252);
  spaceship.show();
  spaceship.show_health();
  checkCollasionAlienandPlayer();

  
  // remove alien lasers when the pass the screen height  
  if(alienBullets!=0){
    for(element of alienBullets){ 
      index = alienBullets.indexOf(element);
      if(element.y>768+32){
        alienBullets.splice(index,1);
      }
    } 
  }
  // draw alien lasers
  for(element of alienBullets){
    element.show();
  }

  run();
  checkColDetBulletandPlayer();
  alienCollide(); // check bullet and allien collide
  alienMove();

  // Create alien lasers by giving them the x and y cordinates of random aliens in the array
  if(Math.floor(Math.random()*100) % 42 == 0){
    if(aliens.length!=0){
      let tmp= aliens[Math.floor((Math.random()*aliens.length))];
      alienBullet = new AlienProjectile(tmp.x,tmp.y,alienBulletImg);
      alienBullets.push(alienBullet);
    }
    if(aliens3.length!=0){
      let tmp= aliens3[Math.floor((Math.random()*aliens3.length))];
      alienBullet = new AlienProjectile(tmp.x,tmp.y,alienBulletImg);
      alienBullets.push(alienBullet);
    }  
  }



  createAliens(); //create new aliens when all die
  

}
