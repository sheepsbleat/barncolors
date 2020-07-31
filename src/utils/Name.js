
function randomName() {
const colors = ["red", "green", "blue", "yellow", "pink", "rainbow", "indigo"];
const animals = ["sheep", "cow", "donkey", "pig", "monkey", "dog", "cat", "alpaca"];
const size = ["big", "giant", "small", "tiny"];
const arr = [randomItem(size), randomItem(colors), randomItem(animals)];
return arr.join("-");
}

export function randomItem(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

export default randomName;