>
let x = 5;
undefined
    >
    let y = 'me';
undefined
    >
    let z = 2;
undefined
    >
    let v = false;
undefined
    >
    console.log(x);
5
undefined
    >
    console.log(y);
me
undefined
    >
    console.log(z);
2
undefined
    >
    console.log(v);
false
undefined


    >
    let typeX = typeof(x);
undefined
    >
    let typeY = typeof(y);
undefined
    >
    let typeZ = typeof(z);
undefined
    >
    let typeV = typeof(v);
undefined
    >
    console.log(typeX);
number
undefined
    >
    console.log(typeY);
string
undefined
    >
    console.log(typeZ);
number
undefined
    >
    console.log(typeV);
boolean
undefined
    >
    if ((typeX == typeY) || (typeX == typeZ) || (typeX == typeV)) {
        console.log("X SAME TYPE");
    } else
if ((typeY == typeZ) || (typeY == typeV)) {
    console.log("Y has SAME TYPE");
} else if (typeZ == typeV) {
    console.log("Z and V have the SAME TYPE");
} else {
    console.log("NO SIMILAR TYPES");
}