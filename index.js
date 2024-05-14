// Code your solution in this file!
let homeBase = 42

function distanceFromHqInBlocks(distance){
    if (distance > 42) {
        return (distance - 42);
    }
    else {
        return (42 - distance);
    }

}

distanceFromHqInBlocks();

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
} 

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else if (distance >= 2500)
        return ("cannot travel that far");
}

console.log(calculatesFarePrice());