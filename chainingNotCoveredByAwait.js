'use strict'

//await will not block for promise chains on preceding lines of code

function print1 () {
   console.log(1);
}
function print2 () {
   console.log(2);
}
function print3a () {
   console.log("3a");
}
function print3b () {
   console.log("3b");
}
function print3c () {
   console.log("3c");
}
function print3d () {
   console.log("3d");
}
function print4 () {
   console.log(4);
}
function print5 () {
   console.log(5);
}

async function run(){
   Promise.resolve().then(print1) //add await on this line of code to make the world a safe place again
                       .then(print2)
                       .then(print3a)
                       .then(print3b)
                       .then(print3c)
                       .then(print3d)
    await Promise.resolve("4").then(print4);
    Promise.resolve("BOO!!!!!").then(print5);
}

run()
