// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function
 destructivelyAppendDriver(driver){
     drivers.push(driver);
 }

 function destructivelyPrependDriver(driver){
     drivers.unshift(driver);
 }

function destructivelyRemoveLastDriver(driver){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(driver){
    drivers.shift();
} 

function appendDriver(driver){
    const driver1 = [...drivers, driver]
    return driver1
}

function prependDriver(driver){
    const driver2 = [driver, ...drivers]
    return driver2
}

function removeLastDriver(){
    const driver = drivers.slice(0, 2)
    return driver
}

function removeFirstDriver(){
    const driver = drivers.slice(1, 3)
    return driver
}