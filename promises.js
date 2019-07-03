'use strict'
const flushPromises = require('flush-promises')

//promises are non-blocking async
//async-await is blocking async (Be careful!!!)


function runUnblockedPromises(){
    console.log("start running unblocked promises")

    new Promise((resolve) => {
        console.log("Expected to see me second :-o")
    })

    console.log("Expected to see me first :-o")

    new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log('1')
    })

    new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log("outer promise")

        new Promise((resolve) => {
            console.log("nested promise")
            resolve()
        }).then(()=>{
            console.log("nested then")
        })
        return "foobar"
    })

    //clained promise
    new Promise((resolve) => {
        resolve()
    }).then(()=>{
    }).then(() => {
        console.log('2.5')
    })

    new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log('3')
    })
}

async function runBlockedPromises(){
    //don't start until previous callbacks finished
    await flushPromises();

    console.log("")
    console.log("start running blocked promises")

    await new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log('1')
    })

    await new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log("outer promise")

        new Promise((resolve) => {
            console.log("nested promise")
            resolve()
        }).then(()=>{
            console.log("nested then")
        })
        return "foobar"
    })

    //clained promise
    await new Promise((resolve) => {
        resolve()
    }).then(()=>{
    }).then(() => {
        console.log('2.5')
    })

    await new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log('3')
    })
}

runUnblockedPromises() //unordered results because unblocking
runBlockedPromises() //ordered results because blocking
