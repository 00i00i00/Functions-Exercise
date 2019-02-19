"use strict";
{

let position = 0; 
let directionForward = true; 

function moveForward(distance) {
    if (directionForward === true) {
        position += distance; 
    } else {
        position -= distance; 
    }
}

function moveBackward(distance) {
    if (directionForward === true) {
        position -= distance;
    } else {
        position += distance;
    }
}

function printLocation() {
    console.log(position);
}

function turnAround(){
    directionForward = !true;
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();

}


