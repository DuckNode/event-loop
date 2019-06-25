'use strict'

function promiseGenerator(value) {
    Promise.resolve(value).then((value) => {
        console.log(value)
    })
}

function one() {
    console.log(1)
}

function two() {
    console.log(2)
}

async function runHomebrewFlush(){

    console.log("start using homebrew flush")

    promiseGenerator('hey')

    setTimeout(two, 0)

    promiseGenerator('middle')

    //with New promise
    await new Promise(function(resolve) {
        setImmediate(resolve);
    });

    promiseGenerator('ho')
    
    //with New promise
    await new Promise(function(resolve) {
        setImmediate(resolve);
    });

    console.log("end using homebrew flush")
}

runHomebrewFlush()
