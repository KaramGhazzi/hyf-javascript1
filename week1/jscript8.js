>
var x = 5;
undefined
    >
    var y = 'me';
undefined
    >
    var z = 2;
undefined
    >
    var v = false;
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
    var typeX = typeof(x);
undefined
    >
    var typeY = typeof(y);
undefined
    >
    var typeZ = typeof(z);
undefined
    >
    var typeV = typeof(v);
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