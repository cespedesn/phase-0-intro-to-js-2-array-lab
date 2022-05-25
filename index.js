const cats= [
    "Milo", 
    "Otis", 
    "Garfield"];

function  destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
const copyCats = [...cats, "Broom"];

function appendCat(name) {
    return copyCats;
}
const newCopyCats = ["Arnold", ...cats];

function prependCat(name) {
    return newCopyCats;
}

function removeLastCat(name) {
    return cats.slice(0,2);
}

function removeFirstCat(name) {
    return cats.slice(1);
}
