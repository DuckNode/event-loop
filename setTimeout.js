'use strict'

function first() {
    console.log("first line of code and first promise.then")
}

function zeroWait() {
    console.log("setTimeout,0")
}

function immediate() {
    console.log("setImmediate")
}

function waitSecond() {
    console.log("setTimeout,1000")
}

function last() {
    console.log("promise.then at the end of the universe")
}

function run() {
    Promise.resolve().then(first)

    setTimeout(zeroWait, 0)

    setImmediate(immediate)

    setTimeout(zeroWait, 0)

    setTimeout(waitSecond, 1000)

    Promise.resolve().then(last)
}

run()
