'use strict'
const flushPromises = require('flush-promises')

//promises are non-blocking async
//async-await is blocking async (Be careful!!!)

function runUnblockedPromises() {
    Promise.resolve().then(() => console.log("I'm first"))

    //nested promise
    Promise.resolve().then(() => {
        return Promise.resolve()
            .then(() => console.log("nested 1"))
            .then(() => console.log("nested 2"))
            .then(() => console.log("nested 3"))
    })

    //clained promise
    Promise.resolve()
        .then(() => console.log("chained 1"))
        .then(() => console.log("chained 2"))
        .then(() => console.log("chained 3"))
        .then(() => console.log("chained 4"))

    Promise.resolve().then(() => console.log("Tricky to guess when I'll appear 8-("))
}

async function runBlockedPromises() {
    await flushPromises() //don't start until previous callbacks finished
    console.log("")

    await Promise.resolve().then(() => console.log("I'm first"))

    //nested promise
    await Promise.resolve().then(() => {
        return Promise.resolve()
            .then(() => console.log("nested 1"))
            .then(() => console.log("nested 2"))
            .then(() => console.log("nested 3"))
    })

    //clained promise
    await Promise.resolve()
        .then(() => console.log("chained 1"))
        .then(() => console.log("chained 2"))
        .then(() => console.log("chained 3"))
        .then(() => console.log("chained 4"))

    await Promise.resolve().then(() => console.log("Easy-peasy to guess where I'll appear now ;-)"))
}

runUnblockedPromises()
runBlockedPromises()