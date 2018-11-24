function volumeOfRectangularPrism(length, width, height){
    if(!length) throw `length arg missing`
    if(!width) throw `width arg missing`
    if(!height) throw `height arg missing`
    if(arguments.length > 3) throw `Too many args passed`
    for (let arg of Array.from(arguments)){
        if (typeof arg != "number")
            throw `${arg || "provided argument"} is not a number`;
        if (arg < 0)
            throw `${arg || "provided argument"} is out of bounds`;
    }
    return Array.from(arguments).reduce((acc,cur)=>acc*cur,1);
}

function surfaceAreaOfRectangularPrism(length, width, height){
    if(!length) throw `length arg missing`
    if(!width) throw `width arg missing`
    if(!height) throw `height arg missing`
    if(arguments.length > 3) throw `Too many args passed`
    for (let arg of Array.from(arguments)){
        if (typeof arg != "number")
            throw `${arg || "provided argument"} is not a number`;
        if (arg < 0)
            throw `${arg || "provided argument"} is out of bounds`;
    }
    return 2*(length*width + width*height + length*height);
}

function volumeOfSphere(radius) {
    if(!radius) throw `radius arg missing`
    if(arguments.length > 1) throw `Too many args passed`
    if(typeof radius != "number")
        throw `${radius || "provided argument"} is not a number`;
    if(radius < 0)
        throw `${radius || "provided argument"} is out of bounds`;
    return (4/3)*Math.PI*Math.pow(radius,3);
}

function surfaceAreaOfSphere(radius){
    if(!radius) throw `radius arg missing`
    if(arguments.length > 1) throw `Too many args passed`
    if(typeof radius != "number")
        throw `${radius || "provided argument"} is not a number`;
    if(radius < 0)
        throw `${radius || "provided argument"} is out of bounds`;
    return 4*Math.PI*Math.pow(radius, 2);
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}
