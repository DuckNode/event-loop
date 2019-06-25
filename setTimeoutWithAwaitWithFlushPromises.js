'use strict'

const flushPromises = require('flush-promises')

function promiseGenerator(value) {
    Promise.resolve(value).then((value) => {
        console.log(value)
    })
}

function two() {
    console.log(2)
}

async function runFlushPromises() {
    console.log("start using flushPromises")

    promiseGenerator('foo');

    setTimeout(two, 0)

    promiseGenerator('more')

    await flushPromises();

    promiseGenerator('bar')

    await flushPromises();

    console.log("end using flushPromises")

    console.log("--------------------------------------")
}

runFlushPromises()
