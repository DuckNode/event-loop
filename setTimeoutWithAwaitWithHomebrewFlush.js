'use strict'

function promiseThen(value) {
    return Promise.resolve(value).then((value) => {
        console.log(value)
    })
}

function zeroTimer() {
    console.log("zeroTimer")
}

function moreFoo() {
    console.log("foo")
}

async function runHomebrewFlush() {

    promiseThen('foo').then(moreFoo).then(moreFoo).then(moreFoo).then(moreFoo).then(moreFoo)

    setTimeout(zeroTimer, 0)

    await new Promise(resolve => setImmediate(resolve))

    promiseThen('bar')
}

runHomebrewFlush()
