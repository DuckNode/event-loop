'use strict'

function promiseGenerator(value) {
    Promise.resolve(value).then((value) => {
        console.log(value)
    })

    let count = 1
    for(let i = 0; i < 6000000000; i++)
    {
        count = count + i
    }
}

function one() {
    console.log(1)
}

function two() {
    console.log(2)
}

promiseGenerator('foo')

setTimeout(one, 0)

setTimeout(two, 1000)

promiseGenerator('bar')
