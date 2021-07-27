const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;
var gameState=0;
var playerCount;
var database;
var quiz;
var question;
var player;
function setup() {

  createCanvas(800,400);
   engine= Engine.create();
   world= engine.world;
   
   database = firebase.database();
   
   quiz= new Quiz
   quiz.getState()
   quiz.start()
}

function draw() {
  background(rgb(19,181,239));
  Engine.update(engine)

}

