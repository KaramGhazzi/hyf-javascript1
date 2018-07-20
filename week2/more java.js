// 1
function sum(a, b, c) {
    return a + b + c;
}

// 2
function colorCar(color) {
    console.log(`a ${color} car`)
}

// 3
function exploreObject(MyObject) {
    propierties = Object.keys(MyObject)
    propierties.forEach(element => {
        console.log(`object has propierty ${element} with value ${MyObject[element]}`)
    });
}

// 4
function vehicleType(color, code) {
    console.log(`a blue ${code == 2? "motorbike":"car"}`)
}

// 5
console.log(3 === 3 ? "yes" : "no")

// 6
function vehicle(color, code, age) {
    console.log(`a blue ${age == 0? "new":"used"} ${code == 2? "motorbike":"car"}`)
}

// 7
let vehicles = ["motorbike", "caravan", "bike", "car"];


// 8
console.log(vehicles[2]);

// 9
function vehicle(color, code, age) {
    console.log(`a blue ${age === 0? "new":"used"} ${vehicles[code-1]}`)
}

// 10
let message = "Amazing Joe's Garage, we service";
for (let i = 0; i < vehicles.length; ++i)
    message += ` ${vehicles[i]}s` + (i > 0 && i + 2 === vehicles.length ? " and" : i + 1 === vehicles.length ? "." : ",");
console.log(message)

// 11
//yes, it workss

// 12
emptyObject = {}

// 13
myTeachers = { html_css: ['html', 'css'], javascript: ['github', 'javascript1', 'javascript2'] } //im very bad with names :(

// 14
myTeachers.language = 'English'

// 15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(`x==y -> ${x==y}`);
console.log(`x===y -> ${x===y}`);
console.log(`z==y -> ${z==y}`);
console.log(`z==x -> ${z==x}`);

// 16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log("o2 before changing o3");
console.log(o2);
o3.foo = "another";
console.log("o2 after changing o3");
console.log(o2);

console.log("o3 before changing o1");
console.log(o3);
o1.foo = "new";
console.log("o3 after changing o1");
console.log(o3);

console.log("Does the order that you assign (o3 = o2 or o2 = o3) matter?")
console.log("does not matter.")

// 17
let bar = 42;
console.log(typeof typeof bar);