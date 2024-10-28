const angels = [
    {name : "Dolly's Angel" },
    {name : "Angel Michael" },
    {name: "Angel Gab"}
];

function getAngel(a, i) {
    //`<div id="1"> Angel Michael</div>
    return `div id="${i}">${a.name}</div`
}

console.log(angels.map(getAngel).join('/n'));

const numbers = [1, 2, 3, 4];
console.log(numbers);

const separator = ".";
console.log(numbers.join(separator));

