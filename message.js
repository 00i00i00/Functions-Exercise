"use strict";
{

let positionN = 0; 
let positionE = 0;
let direction = 'north';


function moveForward(distance) {
    if (direction === 'north') {
      positionN += distance;
    } else if (direction === 'south'){
      positionN -= distance;
    } else if (direction === 'east') {
      positionE += distance;
    } else if (direction === 'west') {
      positionE -= distance;
    }
}

function moveBackward(distance) {
      if (direction === 'north') {
      positionN -= distance;
    } else if (direction === 'south'){
      positionN += distance;
    } else if (direction === 'east') {
      positionE -= distance;
    } else if (direction === 'west') {
      positionE += distance;
    }
}

function printLocation() {
        console.log(`${positionN} N, ${positionE} E`);
    }


function turnRight(){
  if (direction === 'north') {
    direction = 'east';
  } else if (direction === 'east') {
    direction = 'south';
  } else if (direction === 'south') {
    direction = 'west';
  } else if (direction === 'west')
    direction = 'north';
}

function turnLeft(){
  if (direction === 'north') {
    direction = 'west';
  } else if (direction === 'west') {
    direction = 'south';
  } else if (direction === 'south') {
    direction = 'east';
  } else if (direction === 'east') {
    direction = 'north';
  }

}

    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    printLocation();


}
