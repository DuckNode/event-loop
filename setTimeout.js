'use strict'

function promiseGenerator(value) {
    return new Promise((resolve)=>{
        resolve(value)
    })

    // let count = 1
    // for(let i = 0; i < 6000000000; i++)
    // {
    //     count = count + i
    // }
}

function one() {
    console.log(1)
}

function two() {
    console.log(2)
}

function three() {
    console.log(3)
}

promiseGenerator('foo').then((val)=>console.log(val))

setTimeout(one, 0)

setImmediate(three)

setTimeout(two, 0)

promiseGenerator('bar').then((val)=>console.log(val))
