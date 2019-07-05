'use strict'

//await will not block for promise chains on prior lines of code

async function run(){
    Promise.resolve("1").then((value)=>{console.log(value);return "2"})
                        .then((value)=>{console.log(value);return "3a"})
                        .then((value)=>{console.log(value);return "3b"})
                        .then((value)=>{console.log(value);return "3c"})
                        .then((value)=>{console.log(value);return "3d"})
                        .then((value)=>{console.log(value);return "3e"})
                        .then((value)=>{console.log(value);return "3f"})
                        .then(console.log);
    await Promise.resolve("4").then(console.log);
    Promise.resolve("5").then(console.log);
}


//function then1 () {
 //   console.log(1);
//}
//function then2 () {
 //   console.log(2);
//}
//function then3a () {
 //   console.log("3a");
//}
//function then3b () {
 //   console.log("3b");
//}
//function then3c () {
 //   console.log("3c");
//}
//function then4 () {
 //   console.log(4);
//}
//function then5 () {
 //   console.log(5);
//}
//
//async function run(){
 //   Promise.resolve("1").then(then1)
  //                      .then(then2)
   //                     .then(then3a)
    //                    .then(then3b)
     //                   .then(then3c)
    //await Promise.resolve("4").then(then4);
    //Promise.resolve("5").then(then5);
//}

run()
