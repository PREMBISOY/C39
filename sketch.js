var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1_i, car2_i, car3_i, car4_i,track_img,ground_img;
function preload(){
  car1_i = loadImage("images/car1.png");
  car2_i = loadImage("images/car2.png");
  car3_i = loadImage("images/car3.png");
  car4_i = loadImage("images/car4.png");
  track_img = loadImage("images/track.jpg");
ground_img = loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
