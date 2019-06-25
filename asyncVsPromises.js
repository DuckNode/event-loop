'use strict'
const flushPromises = require('flush-promises')

//promises are non-blocking async
//async-await is blocking async (Be careful!!!)

function promiseGenerator(value) {
    return new Promise((resolve) => {
        console.log(value)
        resolve(value)
    })
}

function runUnblockedPromises(){
    console.log("start running unblocked promises")

    promiseGenerator('one')
    promiseGenerator('two')

    //clained promise
    new Promise((resolve) => {
        let j = 0
        resolve(j)
    }).then(() => {
        console.log('3.5')
    })

    promiseGenerator('four')
}

async function runBlockedPromises(){
    //don't start until previous callbacks finished
    await flushPromises();

    console.log("start running unblocked promises")

    await promiseGenerator('one')
    await promiseGenerator('two')

    //chained promise
    await new Promise((resolve) => {
        let j = 0
        resolve(j)
    }).then(() => {
        console.log('3.5')
    })

    await promiseGenerator('four')
}

runUnblockedPromises() //unordered results because unblocking
runBlockedPromises() //ordered results because blocking
