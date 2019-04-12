import React, { useEffect, useRef } from "react";

//Width and height for our canvas
var canvasWidth = 200; 
var canvasHeight = 200;

//the with and height of our spritesheet
var spriteWidth = 864; 
var spriteHeight = 280; 

//we are having two rows and 8 cols in the current sprite sheet
var rows = 2; 
var cols = 8; 

var width = spriteWidth/cols;
var height = spriteHeight/rows;

//x and y coordinates to render the sprite 
var x=0;
var y=0; 

//x and y coordinates of the canvas to get the single frame 
var srcX=0; 
var srcY=0;

//Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
var curFrame = 0; 

//The total frame is 8 
var frameCount = 8; 

export default function Character() {
  const canvas = useRef(null);

  useEffect(() => {
    //setting width and height of the canvas 
    canvas.current.width = canvasWidth;
    canvas.current.height = canvasHeight;

    //Establishing a context to the canvas
    var ctx = canvas.current.getContext("2d");
    
    //Creating an Image object for our character 
    var character = new Image(); 
    
    //Setting the source to the image file 
    character.src = "https://i1.wp.com/www.simplifiedcoding.net/wp-content/uploads/2016/02/character.png?w=864&ssl=1";

    function updateFrame(){
        //Updating the frame index 
        curFrame = ++curFrame % frameCount; 
        //Calculating the x coordinate for spritesheet 
        srcX = curFrame * width; 
    }

    function draw(){
      ctx.clearRect(x,y,width,height);
      //Updating the frame 
      updateFrame();
      //Drawing the image 
      ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
    }

    setInterval(draw,100);
    
  }, [])
  
  return <canvas ref={canvas}></canvas>
}