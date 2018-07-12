let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
undefined
    >
    favoriteAnimals.push('turtle')
4
    >
    console.log(favoriteAnimals);
['blowfish', 'capricorn', 'giraffe', 'turtle']
undefined
    >
    favoriteAnimals.splice(1, 0, 'meerkat')[] >
    console.log(favoriteAnimals);
['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']
undefined
    >
    console.log(`The array has a length of: ${favoriteAnimals.length}`);
The array has a length of: 5
undefined
    >
    favoriteAnimals.splice(3, 1);
['giraffe'] >
console.log(favoriteAnimals);
['blowfish', 'meerkat', 'capricorn', 'turtle']
undefined
    >
    console.log(`The item you are looking for is at index: ${favoriteAnimals.findIndex(x => x === "meerkat")}`)
The item you are looking
for is at index: 1
undefined