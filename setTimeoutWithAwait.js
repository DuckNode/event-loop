'use strict'

function promiseGenerator(value) {
    Promise.resolve(value).then((value) => {
        console.log(value)
    })
}

function one() {
    console.log(1);  
}

function two() {
    console.log(2)
}

async function run(){
    promiseGenerator('foo');

    await setTimeout(one, 1000) //does nothing

    setTimeout(two, 0)

    promiseGenerator('bar')
}

run()