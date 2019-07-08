'use strict'

const flushPromises = require('flush-promises')

function promiseThen(value) {
    Promise.resolve(value).then((value) => {
        console.log(value)
    })
}

function zeroSetTimeout() {
    console.log("setTimeout,0")
}

async function runFlushPromises() {
    promiseThen('promise.then one');

    setTimeout(zeroSetTimeout, 0)

    promiseThen('promise.then after setTimeout,0')

    await flushPromises();

    promiseThen('promise.then after flush')

    console.log("plain synchronous line of code after await flushPromises")
}

runFlushPromises()
