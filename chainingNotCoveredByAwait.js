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

run()
