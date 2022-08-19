song1="";
song2="";

function preload(){
song2= loadSound("mood.mp3");
}

function setup(){
canvas= createCanvas(500,400);
canvas.center();

video= createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,600);
}

function play(){
song2.play();
}